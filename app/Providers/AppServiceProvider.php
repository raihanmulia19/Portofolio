<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);

        $docRoot = $_SERVER['DOCUMENT_ROOT'] ?? null;
        $pubPath = public_path();
        if ($docRoot && is_dir($docRoot) && realpath($docRoot) !== realpath($pubPath)) {
            $srcManifest = $pubPath . '/build/manifest.json';
            $dstManifest = $docRoot . '/build/manifest.json';
            if (file_exists($srcManifest) && (!file_exists($dstManifest) || @md5_file($srcManifest) !== @md5_file($dstManifest))) {
                $this->syncPublicAssets($pubPath, $docRoot);
            }
        }
    }

    private function syncPublicAssets(string $pubPath, string $docRoot): void
    {
        try {
            if (!is_dir($docRoot . '/build/assets')) {
                @mkdir($docRoot . '/build/assets', 0755, true);
            }
            foreach (glob($pubPath . '/build/assets/*') ?: [] as $file) {
                if (is_file($file)) {
                    @copy($file, $docRoot . '/build/assets/' . basename($file));
                }
            }
            if (file_exists($pubPath . '/build/manifest.json')) {
                @copy($pubPath . '/build/manifest.json', $docRoot . '/build/manifest.json');
            }
            foreach (glob($pubPath . '/*') ?: [] as $file) {
                $name = basename($file);
                if (is_file($file) && !in_array($name, ['index.php', '.htaccess', 'hot'], true)) {
                    $dst = $docRoot . '/' . $name;
                    if (!file_exists($dst) || filesize($file) !== filesize($dst) || @md5_file($file) !== @md5_file($dst)) {
                        @copy($file, $dst);
                    }
                }
            }
        } catch (\Throwable $e) {
            // Ignore filesystem sync errors if document root is read-only
        }
    }
}
