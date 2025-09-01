<script lang="ts">
    export let title: string = '';
    export let description: string = '';
    export let keywords: string = '';
    export let url: string = '';
    export let type: string = 'article';
    export let section: string = '';
    export let published: string = '';
    export let modified: string = '';
    export let author: string = 'PaxaPOS';
    export let image: string = '';
    
    // URLs base
    const baseUrl = 'https://paxapos.github.io/documentation';
    const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
    const defaultImage = `${baseUrl}/static/paxapos-social.png`;
    const finalImage = image || defaultImage;
    
    // Schema.org structured data
    const structuredData: any = {
        "@context": "https://schema.org",
        "@type": type === 'faq' ? 'FAQPage' : 'TechArticle',
        "headline": title,
        "description": description,
        "url": fullUrl,
        "datePublished": published || "2025-01-01",
        "dateModified": modified || new Date().toISOString().split('T')[0],
        "author": {
            "@type": "Organization",
            "name": "PaxaPOS",
            "url": "https://paxapos.com",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/favicon.png`
            }
        },
        "publisher": {
            "@type": "Organization",
            "name": "PaxaPOS",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/favicon.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": fullUrl
        },
        "image": {
            "@type": "ImageObject",
            "url": finalImage,
            "width": 1200,
            "height": 630
        },
        "inLanguage": "es-AR",
        "isPartOf": {
            "@type": "WebSite",
            "name": "PaxaPOS Documentation",
            "@id": baseUrl
        }
    };

    // Agregar datos específicos según el tipo
    if (section) {
        structuredData["articleSection"] = section;
    }
    
    if (type === 'faq') {
        structuredData["@type"] = "FAQPage";
    }
    
    // Keywords adicionales para PaxaPOS
    const paxaposKeywords = 'PaxaPOS, sistema restaurante, punto de venta, gestión gastronómica, software restaurante argentino, facturación AFIP, control stock, kitchen display system, KDS';
    const finalKeywords = keywords ? `${keywords}, ${paxaposKeywords}` : paxaposKeywords;
</script>

<svelte:head>
    <!-- Meta básicos optimizados -->
    <title>{title} | PaxaPOS Documentation</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={finalKeywords} />
    <meta name="author" content={author} />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />
    
    <!-- Idioma y región -->
    <meta name="language" content="Spanish" />
    <meta name="geo.region" content="AR" />
    <meta name="geo.country" content="Argentina" />
    
    <!-- URLs canónicas -->
    <link rel="canonical" href={fullUrl} />
    
    <!-- Open Graph para redes sociales -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={fullUrl} />
    <meta property="og:image" content={finalImage} />
    <meta property="og:image:alt" content={title} />
    <meta property="og:site_name" content="PaxaPOS Documentation" />
    <meta property="og:locale" content="es_AR" />
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={finalImage} />
    <meta name="twitter:site" content="@paxapos" />
    
    <!-- Schema.org JSON-LD -->
    {@html `<script type="application/ld+json">${JSON.stringify(structuredData, null, 2)}</script>`}
    
    <!-- Datos adicionales para motores de búsqueda -->
    <meta name="article:publisher" content="PaxaPOS" />
    {#if section}
        <meta name="article:section" content={section} />
    {/if}
    {#if published}
        <meta name="article:published_time" content={published} />
    {/if}
    {#if modified}
        <meta name="article:modified_time" content={modified} />
    {/if}
    
    <!-- Preload de recursos importantes -->
    <link rel="preload" href="/favicon.png" as="image" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    
    <!-- Datos de la organización -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "PaxaPOS",
        "url": "https://paxapos.com",
        "logo": "{baseUrl}/favicon.png",
        "description": "Sistema integral de gestión para restaurantes, bares y comercios gastronómicos en Argentina",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "AR"
        },
        "sameAs": [
            "https://paxapos.github.io/documentation"
        ]
    }
    </script>
</svelte:head>
