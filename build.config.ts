import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
    entries: [
        { input: 'src/index', name: 'index' },
        { input: 'src/bin/index', name: 'bin' },
    ],
    declaration: true,
    clean: true,
    rollup: {
        emitCJS: true,
    },
})
