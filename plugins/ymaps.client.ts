export default defineNuxtPlugin(async () => {
    if (!process.client) return;

    // загрузка скрипта
    await new Promise((resolve) => {
        if (window.ymaps3) return resolve(true);

        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/v3/?apikey=39618766-1d89-404e-bf29-aba9c2fda617&lang=ru_RU';
        script.onload = resolve;
        document.head.appendChild(script);
    });

    const ymaps3 = window.ymaps3;

    await ymaps3.ready;

    const [ymaps3Vue] = await Promise.all([
        ymaps3.import('@yandex/ymaps3-vuefy')
    ]);

    const vuefy = ymaps3Vue.vuefy.bindTo(await import('vue'));

    return {
        provide: {
            ymaps: {
                ymaps3,
                ...vuefy.module(ymaps3)
            }
        }
    };
});