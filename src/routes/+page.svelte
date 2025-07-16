<script>
	import HomePage from '$lib/components/HomePage.svelte';
</script>

<svelte:head>
	<!-- Meta tags básicos -->
	<title>PaxaPOS - Sistema de Gestión Integral para Comercios</title>
	<meta name="description" content="PaxaPOS es un sistema de gestión integral para comercios que permite administrar ventas, stock, facturación, personal y estadísticas desde una plataforma moderna e intuitiva." />
	<meta name="keywords" content="PaxaPOS, sistema de gestión, punto de venta, POS, comercios, ventas, stock, facturación, estadísticas, gestión de personal" />
	<meta name="author" content="PaxaPOS" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://docs.paxapos.com/" />
	<meta property="og:title" content="PaxaPOS - Sistema de Gestión Integral para Comercios" />
	<meta property="og:description" content="Sistema completo de gestión que optimiza ventas, controla inventario, administra personal y proporciona estadísticas clave para tu negocio." />
	<meta property="og:site_name" content="PaxaPOS Documentation" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://docs.paxapos.com/" />
	<meta property="twitter:title" content="PaxaPOS - Sistema de Gestión Integral para Comercios" />
	<meta property="twitter:description" content="Sistema completo de gestión que optimiza ventas, controla inventario, administra personal y proporciona estadísticas clave para tu negocio." />
	
	<!-- Schema.org JSON-LD -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "PaxaPOS",
			"description": "Sistema de gestión integral pensado para adaptarse a las necesidades de tu comercio. Administra operaciones clave como toma de pedidos, control de stock, facturación, seguimiento de ventas y gestión del personal.",
			"url": "https://docs.paxapos.com/",
			"applicationCategory": "BusinessApplication",
			"operatingSystem": "Web-based",
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "USD"
			},
			"publisher": {
				"@type": "Organization",
				"name": "PaxaPOS",
				"url": "https://docs.paxapos.com/"
			},
			"featureList": [
				"Gestión de ventas y operaciones",
				"Control de inventario",
				"Administración de personal",
				"Estadísticas y análisis",
				"Gestión de clientes",
				"Facturación integrada",
				"Monitoreo remoto"
			],
			"softwareVersion": "1.0",
			"datePublished": "2024-01-01",
			"dateModified": "2025-01-15"
		}
	</script>
</svelte:head>

<HomePage/>