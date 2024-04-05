/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,//strictmodu kaldirdik yani console da iki kez yazmasini 
    //? farklı domainlerden alınan image'ler için ilgili domainler config dosyasında belirtilmelidir.
    //* https://nextjs.org/docs/pages/api-reference/components/image
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

module.exports = nextConfig;
