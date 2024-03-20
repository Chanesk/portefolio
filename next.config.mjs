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
                hostname:'lagonaive.com'
            },
            {
                protocol:'https',
                hostname:'linkedin.com'
            },
            {
                protocol:'https',
                hostname:'twitter.com'
            }
        ]
    }
};

export default nextConfig;
