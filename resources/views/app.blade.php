<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Muhammad Raihan - Portfolio') }}</title>
        <meta name="description" content="Portofolio Muhammad Raihan — Software Developer & Technology Enthusiast. Lulusan D4 Teknik Informatika Politeknik Caltex Riau (Cumlaude) yang berfokus pada pengembangan web, jaringan komputer, keamanan siber, dan solusi digital.">
        <meta property="og:type" content="website">
        <meta property="og:title" content="Muhammad Raihan — Software Developer & Technology Enthusiast">
        <meta property="og:description" content="Portofolio karya teknis, sistem informasi, keahlian, dan sertifikasi profesional Muhammad Raihan.">
        <meta property="og:image" content="/profile.png">
        <meta name="twitter:card" content="summary_large_image">
        <link rel="icon" type="image/png" href="/icon.png?v=2">
        <link rel="shortcut icon" href="/favicon.ico?v=2">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        <script>
            (function() {
                try {
                    var saved = localStorage.getItem('mr-theme-pref');
                    var theme = (saved === 'light' || saved === 'dark')
                        ? saved
                        : (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                    document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
            })();
        </script>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
