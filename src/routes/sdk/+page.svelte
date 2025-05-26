<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
	<!-- Header -->
	<div class="mb-8">
		<h1 class="text-4xl font-bold text-gray-900 mb-4">SDKs y Librerías</h1>
		<p class="text-xl text-gray-600">
			Utiliza nuestros SDKs oficiales para integrar PaxaPOS en tu aplicación de forma rápida y sencilla.
		</p>
	</div>

	<!-- Navigation -->
	<div class="grid lg:grid-cols-4 gap-8">
		<!-- Sidebar -->
		<aside class="lg:col-span-1">
			<nav class="sticky top-8 space-y-2">
				<a href="#javascript" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">JavaScript/TypeScript</a>
				<a href="#python" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Python</a>
				<a href="#php" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">PHP</a>
				<a href="#java" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Java</a>
				<a href="#csharp" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">C#</a>
				<a href="#mobile" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">SDKs Móviles</a>
				<a href="#examples" class="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Ejemplos</a>
			</nav>
		</aside>

		<!-- Main Content -->
		<main class="lg:col-span-3 space-y-12">
			<!-- JavaScript/TypeScript SDK -->
			<section id="javascript" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">JavaScript/TypeScript SDK</h2>
				<p class="text-gray-600 mb-6">
					SDK oficial para aplicaciones web y Node.js con soporte completo para TypeScript.
				</p>

				<!-- Installation -->
				<div class="mb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Instalación</h3>
					<div class="bg-gray-50 rounded-lg p-4">
						<pre class="text-sm text-gray-800"><code># npm
npm install @paxapos/sdk

# yarn
yarn add @paxapos/sdk

# pnpm
pnpm add @paxapos/sdk</code></pre>
					</div>
				</div>

				<!-- Quick Start -->
				<div class="mb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Inicio Rápido</h3>
					<div class="bg-gray-50 rounded-lg p-4">
						<pre class="text-sm text-gray-800"><code>{`import { PaxaPOS } from '@paxapos/sdk';

// Inicializar el cliente
const paxapos = new PaxaPOS({
  apiKey: 'tu-api-key',
  baseUrl: 'https://api.paxapos.com/v1',
  tenant: 'tu-tenant'
});

// Crear un producto
const product = await paxapos.products.create({
  name: 'Café Americano',
  price: 2.50,
  category: 'Bebidas'
});

// Procesar una venta
const sale = await paxapos.sales.create({
  items: [
    { productId: product.id, quantity: 2 }
  ],
  paymentMethod: 'cash',
  customerId: 'customer-123'
});`}</code></pre>
					</div>
				</div>

				<!-- Features -->
				<div class="mb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Características</h3>
					<ul class="list-disc list-inside space-y-2 text-gray-600">
						<li>Soporte completo para TypeScript</li>
						<li>Manejo automático de autenticación</li>
						<li>Retry automático en caso de errores de red</li>
						<li>Validación de datos integrada</li>
						<li>Soporte para webhooks</li>
						<li>Interceptores de request/response</li>
					</ul>
				</div>
			</section>

			<!-- Python SDK -->
			<section id="python" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Python SDK</h2>
				<p class="text-gray-600 mb-6">
					SDK para aplicaciones Python con soporte para Django, Flask y FastAPI.
				</p>

				<!-- Installation -->
				<div class="mb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Instalación</h3>
					<div class="bg-gray-50 rounded-lg p-4">
						<pre class="text-sm text-gray-800"><code># pip
pip install paxapos-sdk

# poetry
poetry add paxapos-sdk</code></pre>
					</div>
				</div>

				<!-- Quick Start -->
				<div class="mb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Inicio Rápido</h3>
					<div class="bg-gray-50 rounded-lg p-4">
						<pre class="text-sm text-gray-800"><code>{`from paxapos import PaxaPOS

# Inicializar el cliente
client = PaxaPOS(
    api_key='tu-api-key',
    base_url='https://api.paxapos.com/v1',
    tenant='tu-tenant'
)

# Crear un producto
product = client.products.create({
    'name': 'Café Americano',
    'price': 2.50,
    'category': 'Bebidas'
})

# Procesar una venta
sale = client.sales.create({
    'items': [
        {'product_id': product['id'], 'quantity': 2}
    ],
    'payment_method': 'cash',
    'customer_id': 'customer-123'
})`}</code></pre>
					</div>
				</div>
			</section>

			<!-- PHP SDK -->
			<section id="php" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">PHP SDK</h2>
				<p class="text-gray-600 mb-6">
					SDK para aplicaciones PHP con soporte para Laravel, Symfony y frameworks populares.
				</p>

				<!-- Installation -->
				<div class="mb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Instalación</h3>
					<div class="bg-gray-50 rounded-lg p-4">
						<pre class="text-sm text-gray-800"><code>composer require paxapos/sdk</code></pre>
					</div>
				</div>

				<!-- Quick Start -->
				<div class="mb-6">
					<h3 class="text-lg font-semibold text-gray-900 mb-3">Inicio Rápido</h3>
					<div class="bg-gray-50 rounded-lg p-4">
						<pre class="text-sm text-gray-800"><code>{`<?php

use PaxaPOS\\Client;

// Inicializar el cliente
$client = new Client([
    'api_key' => 'tu-api-key',
    'base_url' => 'https://api.paxapos.com/v1',
    'tenant' => 'tu-tenant'
]);

// Crear un producto
$product = $client->products()->create([
    'name' => 'Café Americano',
    'price' => 2.50,
    'category' => 'Bebidas'
]);

// Procesar una venta
$sale = $client->sales()->create([
    'items' => [
        ['product_id' => $product['id'], 'quantity' => 2]
    ],
    'payment_method' => 'cash',
    'customer_id' => 'customer-123'
]);`}</code></pre>
					</div>
				</div>
			</section>

			<!-- Mobile SDKs -->
			<section id="mobile" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">SDKs Móviles</h2>
				<p class="text-gray-600 mb-6">
					SDKs nativos para aplicaciones móviles iOS y Android.
				</p>

				<div class="grid md:grid-cols-2 gap-6">
					<!-- iOS SDK -->
					<div class="border rounded-lg p-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-3">iOS (Swift)</h3>
						<div class="bg-gray-50 rounded-lg p-4 mb-4">
							<pre class="text-sm text-gray-800"><code>// CocoaPods
pod 'PaxaPOSSDK'

// Swift Package Manager
.package(url: "https://github.com/paxapos/ios-sdk", from: "1.0.0")</code></pre>
						</div>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`import PaxaPOSSDK

let client = PaxaPOS(
    apiKey: "tu-api-key",
    tenant: "tu-tenant"
)

// Crear venta
client.sales.create(saleData) { result in
    switch result {
    case .success(let sale):
        print("Venta creada: \\(sale.id)")
    case .failure(let error):
        print("Error: \\(error)")
    }
}`}</code></pre>
						</div>
					</div>

					<!-- Android SDK -->
					<div class="border rounded-lg p-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-3">Android (Kotlin)</h3>
						<div class="bg-gray-50 rounded-lg p-4 mb-4">
							<pre class="text-sm text-gray-800"><code>// build.gradle
implementation 'com.paxapos:android-sdk:1.0.0'</code></pre>
						</div>
						<div class="bg-gray-50 rounded-lg p-4">
							<pre class="text-sm text-gray-800"><code>{`import com.paxapos.sdk.PaxaPOS

val client = PaxaPOS.Builder()
    .apiKey("tu-api-key")
    .tenant("tu-tenant")
    .build()

// Crear venta
client.sales.create(saleData) { result ->
    result.onSuccess { sale ->
        println("Venta creada: \${sale.id}")
    }.onFailure { error ->
        println("Error: $error")
    }
}`}</code></pre>
						</div>
					</div>
				</div>
			</section>

			<!-- Examples -->
			<section id="examples" class="bg-white rounded-lg shadow-sm border p-6">
				<h2 class="text-2xl font-bold text-gray-900 mb-4">Ejemplos de Uso</h2>
				<p class="text-gray-600 mb-6">
					Repositorios con ejemplos completos para diferentes casos de uso.
				</p>

				<div class="grid md:grid-cols-2 gap-6">
					<div class="border rounded-lg p-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">E-commerce Integration</h3>
						<p class="text-gray-600 mb-3">Ejemplo de integración con tienda online usando React y Node.js</p>
						<a href="https://github.com/paxapos/examples/tree/main/ecommerce" class="text-blue-600 hover:text-blue-800 font-medium">Ver en GitHub →</a>
					</div>

					<div class="border rounded-lg p-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Restaurant POS</h3>
						<p class="text-gray-600 mb-3">Sistema completo para restaurante con Vue.js y Python</p>
						<a href="https://github.com/paxapos/examples/tree/main/restaurant" class="text-blue-600 hover:text-blue-800 font-medium">Ver en GitHub →</a>
					</div>

					<div class="border rounded-lg p-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Mobile POS App</h3>
						<p class="text-gray-600 mb-3">Aplicación móvil completa usando React Native</p>
						<a href="https://github.com/paxapos/examples/tree/main/mobile-pos" class="text-blue-600 hover:text-blue-800 font-medium">Ver en GitHub →</a>
					</div>

					<div class="border rounded-lg p-4">
						<h3 class="text-lg font-semibold text-gray-900 mb-2">Webhook Handler</h3>
						<p class="text-gray-600 mb-3">Manejo de webhooks con Express.js y validación de firmas</p>
						<a href="https://github.com/paxapos/examples/tree/main/webhooks" class="text-blue-600 hover:text-blue-800 font-medium">Ver en GitHub →</a>
					</div>
				</div>
			</section>

			<!-- Support -->
			<section class="bg-blue-50 border border-blue-200 rounded-lg p-6">
				<h2 class="text-xl font-bold text-blue-900 mb-4">Soporte y Contribuciones</h2>
				<div class="space-y-4 text-blue-800">
					<p>
						<strong>¿Necesitas ayuda?</strong> Visita nuestro 
						<a href="/troubleshooting" class="underline hover:no-underline">centro de ayuda</a> 
						o contacta a nuestro equipo de soporte.
					</p>
					<p>
						<strong>¿Encontraste un bug?</strong> Reporta issues en nuestros repositorios de GitHub o contacta a nuestro equipo técnico.
					</p>
					<p>
						<strong>¿Quieres contribuir?</strong> ¡Nos encanta recibir contribuciones! Revisa nuestras guías de contribución en cada repositorio.
					</p>
				</div>
			</section>
		</main>
	</div>
</div>
