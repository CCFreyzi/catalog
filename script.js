// Масив об'єктів з даними для кожного блоку
const blocksData = [
    {
        mainImage: "./images/h1.jpeg",
        banner: {
            title: "LOFT",
            description: "Корпус: сертифіковане ламіноване ДСП Kronospan<br>Метал: порошкове фарбування<br>Фурнітура: GTV (Польща)"
        },
        products: [
            {
                image: "./images/p1.jpg",
                title: "Тумба LOFT 1400",
                specs: ["ширина - 1400мм", "висота - 500мм", "глибина - 450мм"],
                oldPrice: "8200₴",
                newPrice: "7380₴"
            },
            {
                image: "./images/p2.jpg",
                title: "Дзеркало LOFT",
                specs: ["ширина - 800мм", "висота - 1000 мм"],
                oldPrice: "4200₴",
                newPrice: "3780₴"
            },
            {
                image: "./images/p3.jpg",
                title: "Стіл LOFT 1ш",
                specs: ["ширина - 900мм", "висота - 750мм", "глибина - 600мм"],
                oldPrice: "6400₴",
                newPrice: "5760₴"
            }
        ]
    },
     {
        mainImage: "./images/h3.jpeg",
        banner: {
            title: "LOFT",
            description: "Корпус: сертифіковане ламіноване ДСП Kronospan<br>Метал: порошкове фарбування<br>Фурнітура: GTV (Польща)"
        },
        products: [
            {
                image: "./images/p6.jpg",
                title: "Ліжко LOFT 160х200",
                specs: ["ширина - 1680мм", "висота - 860мм", "глибина - 2060мм"],
                oldPrice: "11900₴",
                newPrice: "10710₴"
            },
            {
                image: "./images/p7.jpg",
                title: "Тумба приліжкова LOFT",
                specs: ["ширина - 500мм", "висота - 500 мм", "глибина - 450мм"],
                oldPrice: "4500₴",
                newPrice: "4050"
            },
            {
                image: "./images/p8.jpg",
                title: "Ліжко двоярусне LOFT 80х1900",
                specs: ["ширина - 1980мм", "висота - 1500 мм", "глибина - 850мм"],
                oldPrice: "13900₴",
                newPrice: "12510"
            }
        ]
    }
];

// Знаходимо кореневий елемент
const appContainer = document.getElementById('app');

// Функція для генерації списку характеристик <li>
const renderSpecs = (specsArray) => {
    return specsArray.map(spec => `<li>${spec}</li>`).join('');
};

// Функція рендерингу всього контенту
const renderBlocks = () => {
    const htmlContent = blocksData.map(block => `
        <div class="container">
            <div class="main-image-wrapper">
                <img src="${block.mainImage}" alt="${block.banner.title}" class="main-image">
            </div>

            <section class="info-banner">
                <h1>${block.banner.title}</h1>
                <p>${block.banner.description}</p>
            </section>

            <section class="products-section">
                ${block.products.map(product => `
                    <article class="product-card">
                        <img src="${product.image}" alt="${product.title}" class="product-image">
                        <div>
                        <h2 class="product-title">${product.title}</h2>
                        <ul class="product-specs">
                            ${renderSpecs(product.specs)}
                        </ul>

                        <div class="price-container">
                            <div class="old-price">${product.oldPrice}</div><br>
                            <div class="new-price">${product.newPrice}</div>
                        </div>
                        </div>
                    </article>
                `).join('')}
            </section>

            <footer class="footer-notice">
                НА ЗАМОВЛЕННЯ ДО 200 000 грн. ДІЄ ПРАЙС ЗІ ЗНИЖКОЮ -10%<br>ЗАМОВЛЕННЯ ВИЩЕ 200 000 грн. ПРОРАХОВУЄТЬСЯ ЗА ІНДИВІДУАЛЬНИМ ПРАЙСОМ
            </footer>
        </div>
    `).join('');

    // Вставляємо згенерований рядок в DOM
    appContainer.innerHTML = htmlContent;
};

// Викликаємо функцію при завантаженні скрипта
renderBlocks();