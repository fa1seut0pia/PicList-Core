import { IPicGo, IPlugin, Undefinable, ICLIConfigs, IStringKeyMap } from '../../types'
import { uploaderTranslators } from './utils'

const use: IPlugin = {
  handle: async (ctx: IPicGo) => {
    const cmd = ctx.cmd
    cmd.program
      .command('use')
      .arguments('[module]')
      .description('use modules of picgo')
      .action((module: string) => {
        ;(async () => {
          try {
            let prompts: any[] = []
            const config: ICLIConfigs = {
              uploader: {
                type: 'list',
                name: 'uploader',
                message: 'Use an uploader',
                choices: ctx.helper.uploader.getIdList().map((item: string) => {
                  return {
                    name: uploaderTranslators(ctx)[item] || item,
                    value: item
                  }
                }),
                default: ctx.getConfig('picBed.uploader') || ctx.getConfig('picBed.current') || 'smms'
              },
              transformer: {
                type: 'list',
                name: 'transformer',
                message: 'Use a transformer',
                choices: ctx.helper.transformer.getIdList(),
                default: ctx.getConfig<Undefinable<string>>('picBed.transformer') || 'path'
              },
              plugins: {
                type: 'checkbox',
                name: 'plugins',
                message: 'Use plugins',
                choices: ctx.pluginLoader.getFullList(),
                default: Object.keys(ctx.getConfig('picgoPlugins')).filter((item: string) =>
                  ctx.getConfig(`picgoPlugins.${item}`)
                )
              }
            }
            // if an option is specific, then just set this option in config
            if (module) {
              if (config[module]) {
                prompts.push(config[module])
              } else {
                ctx.log.warn(`No module named ${module}`)
                ctx.log.warn('Available modules are uploader|transformer|plugins')
                return
              }
            } else {
              prompts = Object.keys(config).map((item: string) => config[item])
            }
            const answer = await cmd.inquirer.prompt<any>(prompts)

            // handle for plugins option from Array to object
            if (answer.plugins) {
              const plugins = ctx.getConfig<IStringKeyMap<boolean>>('picgoPlugins')
              Object.keys(plugins).forEach((item: string) => {
                if (answer.plugins.includes(item)) {
                  plugins[item] = true
                } else {
                  plugins[item] = false
                }
              })
              // save config for plugins
              ctx.saveConfig({
                picgoPlugins: plugins
              })
            }
            // save config for uploader & transformer
            ctx.saveConfig({
              'picBed.current': answer.uploader || ctx.getConfig<string>('picBed.current'),
              'picBed.uploader': answer.uploader || ctx.getConfig<string>('picBed.current'),
              'picBed.transformer': answer.transformer || 'path'
            })
            ctx.log.success('Configure saved successfully!')
          } catch (e: any) {
            ctx.log.error(e)
            if (process.argv.includes('--debug')) {
              throw e
            }
          }
        })().catch(e => {
          ctx.log.error(e)
        })
      })
  }
}

export default use
