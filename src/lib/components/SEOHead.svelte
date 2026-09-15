<script lang="ts">
	let {
		title = '',
		description = '',
		keywords = '',
		url = '',
		type = 'article',
		section = '',
		published = '',
		modified = '',
		author = 'PaxaPOS',
		image = '',
	}: {
		title?: string;
		description?: string;
		keywords?: string;
		url?: string;
		type?: string;
		section?: string;
		published?: string;
		modified?: string;
		author?: string;
		image?: string;
	} = $props();

	const baseUrl = 'https://doc.paxapos.com';
	let fullUrl = $derived(url ? `${baseUrl}${url}` : baseUrl);
	const defaultImage = `${baseUrl}/favicon.png`;
	let finalImage = $derived(image || defaultImage);

	const paxaposKeywords =
		'PaxaPOS, sistema restaurante, punto de venta, gestión gastronómica, software restaurante argentino, facturación AFIP, control stock, kitchen display system, KDS';
	let finalKeywords = $derived(keywords ? `${keywords}, ${paxaposKeywords}` : paxaposKeywords);

	let structuredData = $derived.by(() => {
		const data: Record<string, unknown> = {
			'@context': 'https://schema.org',
			'@type': type === 'faq' ? 'FAQPage' : 'TechArticle',
			headline: title,
			description: description,
			url: fullUrl,
			datePublished: published || '2025-01-01',
			dateModified: modified || new Date().toISOString().split('T')[0],
			author: {
				'@type': 'Organization',
				name: 'PaxaPOS',
				url: 'https://paxapos.com',
				logo: {
					'@type': 'ImageObject',
					url: `${baseUrl}/favicon.png`,
				},
			},
			publisher: {
				'@type': 'Organization',
				name: 'PaxaPOS',
				logo: {
					'@type': 'ImageObject',
					url: `${baseUrl}/favicon.png`,
				},
			},
			mainEntityOfPage: {
				'@type': 'WebPage',
				'@id': fullUrl,
			},
			image: {
				'@type': 'ImageObject',
				url: finalImage,
			},
			inLanguage: 'es-AR',
			isPartOf: {
				'@type': 'WebSite',
				name: 'PaxaPOS Documentation',
				'@id': baseUrl,
			},
		};

		if (section) {
			data['articleSection'] = section;
		}

		return data;
	});

	const orgStructuredData = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'PaxaPOS',
		url: 'https://paxapos.com',
		logo: `${baseUrl}/favicon.png`,
		description:
			'Sistema integral de gestión para restaurantes, bares y comercios gastronómicos en Argentina',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'AR',
		},
		sameAs: [baseUrl],
	};

	const jsonLd = (data: unknown) =>
		`<script type="application/ld+json">${JSON.stringify(data, null, 2)}</` + 'script>';
</script>

<svelte:head>
	<!-- Meta básicos optimizados -->
	<title>{title} | PaxaPOS Documentation</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={finalKeywords} />
	<meta name="author" content={author} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
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
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- JSON generado localmente -->
	{@html jsonLd(structuredData)}

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

	<!-- Datos de la organización -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- JSON generado localmente -->
	{@html jsonLd(orgStructuredData)}
</svelte:head>
