<script>
	import Example from "./components/example/Example.svelte";

	import { Router, Route } from "svelte-routing"
	import { onMount } from "svelte";
	import { getBaseUrl, getRoutePath, isHashRouter, movePathToHash } from "./libs/router";

	import Header from "./components/common/Header.svelte";	
	import Footer from "./components/common/Footer.svelte";	
	import MainPage from "./pages/MainPage.svelte";
	import NowPage from "./pages/NowPage.svelte";
	import PopularPage from "./pages/PopularPage.svelte";
	import UpcomingPage from "./pages/UpcomingPage.svelte";
	import TopPage from "./pages/TopPage.svelte";

	import NowSubPage from "./pages/NowSubPage.svelte";
	import PopularSubPage from "./pages/PopularSubPage.svelte";
	import UpcomingSubPage from "./pages/UpcomingSubPage.svelte";
	import TopSubPage from "./pages/TopSubPage.svelte";

	let url = '/';
	let routerReady = false;

	onMount(() => {
		movePathToHash();
		url = getRoutePath();
		routerReady = true;

		const handleRouteChange = () => {
			url = getRoutePath();
		};

		const handleLinkClick = (event) => {
			if (isHashRouter() || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

			const anchor = event.target.closest('a[href]');
			if (!anchor || anchor.target || anchor.hasAttribute('download')) return;
			if (anchor.getAttribute('href').startsWith('#')) return;

			const nextUrl = new URL(anchor.href);
			if (nextUrl.origin !== window.location.origin) return;

			const baseUrl = getBaseUrl();
			if (baseUrl && !nextUrl.pathname.startsWith(baseUrl)) return;

			event.preventDefault();
			window.history.pushState(null, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
			handleRouteChange();
		};

		window.addEventListener(isHashRouter() ? 'hashchange' : 'popstate', handleRouteChange);
		document.addEventListener('click', handleLinkClick);
		return () => {
			window.removeEventListener(isHashRouter() ? 'hashchange' : 'popstate', handleRouteChange);
			document.removeEventListener('click', handleLinkClick);
		};
	});
</script>
<!-- <Example/> -->

<svelte:head>
	<title>MOVING</title>
</svelte:head>

<Header />
{#if routerReady}
	{#key url}
		<Router {url}>
			<Route path="/" component={MainPage}/>
			<Route path="/now" component={NowPage}/>
			<Route path="/popular" component={PopularPage}/>
			<Route path="/upcoming" component={UpcomingPage}/>
			<Route path="/top" component={TopPage}/>

			<Route path="/now/:id" component={NowSubPage}/>
			<Route path="/popular/:id" component={PopularSubPage}/>
			<Route path="/upcoming/:id" component={UpcomingSubPage}/>
			<Route path="/top/:id" component={TopSubPage}/>
		</Router>
	{/key}
{/if}
<Footer />
