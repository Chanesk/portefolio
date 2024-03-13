/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'figma.com'
            },
            {
                protocol:'https',
                hostname:'github.com'
            },
            {
                protocol:'https',
                hostname:'socodis-equipment.com'
            },
            {
                protocol:'https',
                hostname:'raconte-chanesk.vercel.app'
            },
            {
                protocol:'https',
                hostname:'https://www.lagonaive.com'
            }
        ]
    }
};

export default nextConfig;
