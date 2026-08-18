const allCards = [
    {
        title: "National Emergency Number",
        subtitle: "National Emergency",
        number: "999",
        category: "All",
        image: "./assets/emergency.png",
        iconBg: "#FFE3E2"
    },

    {
        title: "Police Helpline Number",
        subtitle: "Police",
        number: "999",
        category: "Police",
        image: "./assets/police.png",
        iconBg: "#DFEFFF"
    },

    {
        title: "Fire Service Number",
        subtitle: "Fire Service",
        number: "999",
        category: "Fire",
        image: "./assets/fire-service.png",
        iconBg: "#FFE3E2"
    },

    {
        title: "Ambulance Service",
        subtitle: "Ambulance",
        number: "1994-999999",
        category: "Health",
        image: "./assets/ambulance.png",
        iconBg: "#FFE3E2"
    },

    {
        title: "Women & Child Helpline",
        subtitle: "Women & Child Helpline",
        number: "109",
        category: "Help",
        image: "./assets/emergency.png",
        iconBg: "#FFE3E2"
    },

    {
        title: "Anti-Corruption Helpline",
        subtitle: "Anti-Corruption",
        number: "106",
        category: "Govt.",
        image: "./assets/emergency.png",
        iconBg: "#FFE3E2"
    },

    {
        title: "Electricity Helpline",
        subtitle: "Electricity Outage",
        number: "16216",
        category: "Electricity",
        image: "./assets/emergency.png",
        iconBg: "#FFE3E2"
    },

    {
        title: "Brac Helpline",
        subtitle: "Brac",
        number: "16445",
        category: "NGO",
        image: "./assets/brac.png",
        iconBg: "#FFE3E2"
    },

    {
        title: "Bangladesh Railway Helpline",
        subtitle: "Bangladesh Railway",
        number: "163",
        category: "Travel",
        image: "./assets/Bangladesh-Railway.png",
        iconBg: "#FFE3E2"
    }
];


const cardContainer = document.getElementById("card-container");


allCards.forEach(allCard => {

    const card = document.createElement("div");

    card.className = `
        w-full
        shadow-sm
        rounded-xl
        bg-white
        p-5
    `;

    card.innerHTML = `
        
        <!-- Icon + Heart -->
        <div class="flex justify-between items-start">

            <div 
                class="rounded-xl h-[60px] w-[60px] flex items-center justify-center"
                style="background-color: ${allCard.iconBg};"
            >
                <img 
                    class="w-[30px] h-[30px]" 
                    src="${allCard.image}" 
                    alt="${allCard.title}"
                >
            </div>

            <i class="fa-regular fa-heart text-gray-400 text-lg"></i>

        </div>


        <!-- Text + Number -->
        <div class="mt-5">

            <h1 class="font-bold text-black text-xl">
                ${allCard.title}
            </h1>

            <p class="text-gray-500 text-sm mt-1">
                ${allCard.subtitle}
            </p>

            <h1 class="font-bold text-black text-2xl mt-4">
                ${allCard.number}
            </h1>

            <button class="btn bg-gray-100 border-0 rounded-full font-normal text-gray-500 mt-1">
                ${allCard.category}
            </button>

        </div>


        <!-- Copy + Call Buttons -->
        <div class="flex gap-2 mt-5">

            <button class="btn bg-white border border-gray-200 rounded-xl font-normal text-gray-500 flex-1">
                <i class="fa-regular fa-copy"></i>
                Copy
            </button>

            <button class="btn bg-[#00A63E] border-[#00A63E] rounded-xl font-normal text-white flex-1">
                <i class="fa-solid fa-phone"></i>
                Call
            </button>

        </div>
    `;

    cardContainer.appendChild(card);

});