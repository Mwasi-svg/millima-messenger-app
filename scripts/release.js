import { c } from 'tar';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// --- Configuration ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const RELEASE_ROOT = path.join(ROOT_DIR, 'release');
const PACKAGE_JSON_PATH = path.join(ROOT_DIR, 'package.json');

// --- Helpers ---
const ensureDirectoryExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

const getTimestamp = () => {
    const now = new Date();
    const pad = (n) => n.toString().padStart(2, '0');
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}`;
};

const getVersion = () => {
    try {
        const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf-8'));
        return pkg.version || '0.0.0';
    } catch (error) {
        console.warn('Warning: Could not read package.json version. Defaulting to 0.0.0');
        return '0.0.0';
    }
};

const copyRecursiveSync = (src, dest) => {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
        ensureDirectoryExists(dest);
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
};

// --- Main Script ---
console.log('--- Starting Release Workflow ---');

if (!fs.existsSync(DIST_DIR)) {
    console.error(`Error: Content directory "${DIST_DIR}" does not exist. Run "npm run build" first.`);
    process.exit(1);
}

const run = async () => {
    try {
        // 1. Prepare Paths
        ensureDirectoryExists(RELEASE_ROOT);
        const version = getVersion();
        const timestamp = getTimestamp();
        const releaseFolderName = `v${version}_${timestamp}`;
        const releaseFolderPath = path.join(RELEASE_ROOT, releaseFolderName);
        const archiveName = `${releaseFolderName}.tar.gz`;
        const archivePath = path.join(RELEASE_ROOT, archiveName);

        console.log(`Version: ${version}`);
        console.log(`Timestamp: ${timestamp}`);
        console.log(`Release Folder: ${releaseFolderName}`);

        // 2. Create Release Folder and Copy Content
        console.log(`Copying files from dist/ to ${releaseFolderPath}...`);
        copyRecursiveSync(DIST_DIR, releaseFolderPath);

        // 3. Create tar.gz Archive
        console.log(`Creating tar.gz archive at ${archivePath}...`);

        await c(
            {
                gzip: true,
                file: archivePath,
                cwd: RELEASE_ROOT,
            },
            [releaseFolderName]
        );

        console.log('--- Release Created Successfully ---');
        console.log(`Folder: ${releaseFolderPath}`);
        console.log(`Archive: ${archivePath}`);

    } catch (error) {
        console.error('Error during release workflow:', error);
        process.exit(1);
    }
};

run();
