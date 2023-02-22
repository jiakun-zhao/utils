import { join } from 'node:path'
import ini from 'ini'
import { readText } from '../utils'

export default async function (): Promise<any | null> {
    const envRcPath = process.env.SECLUSION_CONFIG_FILE
    const envHomePath = process.platform === 'win32'
        ? process.env.USERPROFILE
        : process.env.HOME
    const rcPath = envRcPath || join(envHomePath || '~/', '.seclusionrc')

    const text = await readText(rcPath)
    if (text) {
        return ini.parse(text)
    } else {
        console.error('Config file is not exists!')
        return null
    }
}
