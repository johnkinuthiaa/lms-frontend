import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Nevani Learning",
        short_name: "Nevani Learning",
        description: "A learning management system to help people learn coding",
        icons: [
            {
                src: "/web-app-manifest-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/web-app-manifest-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            }
        ],
        theme_color: "#ffffff",
        background_color: "rgb(0,0,0)",
        display: "standalone"
    }
}