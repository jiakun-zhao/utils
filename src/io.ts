import { access, readFile, readdir, stat } from 'node:fs/promises'
import { join } from 'node:path'

export async function readText(path: string) {
    try {
        await access(path)
        return await readFile(path, 'utf-8')
    } catch {
        return null
    }
}

export async function readJson(path: string) {
    const text = await readText(path)
    return text ? JSON.parse(text) : null
}

export async function readPackageJson(path = process.cwd()) {
    return readJson(path)
}

export async function walk(path: string) {
    const files: string[] = []
    try {
        for (const entry of await readdir(path)) {
            const entryPath = join(path, entry)
            if ((await stat(entryPath)).isDirectory())
                files.push(...await walk(entryPath))
            else
                files.push(entryPath)
        }
    } catch {
        return []
    }
    return files
}
