import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/js/app.js',
                'resources/assets/admin/plugins/fontawesome-free/css/all.min.css',
                "resources/assets/admin/css/adminlte.min.css",
                'resources/css/app.css',

            ],
            refresh: true,
        }),
    ],
});
