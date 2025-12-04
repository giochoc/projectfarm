// Array com 100 produtos simulados (10 por categoria, conforme requisitos do projeto)
const productsData = [
    // Analgésicos e Anti-inflamatórios (10 produtos) [cite: 15]
    { id: 1, name: "Ibuprofeno 400mg", category: "analgesicos", icon: "pills", description: "Alívio rápido para dor e febre." },
    { id: 2, name: "Paracetamol 750mg", category: "analgesicos", icon: "pills", description: "Indicado para dores leves a moderadas." },
    { id: 3, name: "Dipirona Sódica 500mg", category: "analgesicos", icon: "capsules", description: "Analgésico e antitérmico potente." },
    { id: 4, name: "Nimesulida", category: "analgesicos", icon: "pills", description: "Anti-inflamatório não esteroidal (AINE)." },
    { id: 5, name: "Ácido Acetilsalicílico", category: "analgesicos", icon: "capsules", description: "Ação anti-inflamatória e anti-agregante plaquetário." },
    { id: 6, name: "Cetoprofeno Gel", category: "analgesicos", icon: "cream", description: "Para dores musculares e inflamações localizadas." },
    { id: 7, name: "Meloxicam", category: "analgesicos", icon: "pills", description: "Alívio sintomático da artrite reumatoide." },
    { id: 8, name: "Tylenol DC", category: "analgesicos", icon: "pills", description: "Combate dor e sintomas de resfriado." },
    { id: 9, name: "Dorflex", category: "analgesicos", icon: "capsules", description: "Relaxante muscular e analgésico." },
    { id: 10, name: "Cataflam", category: "analgesicos", icon: "pills", description: "Alivia a dor e a inflamação." },
    
    // Antibióticos (10 produtos) [cite: 16]
    { id: 11, name: "Amoxicilina 500mg", category: "antibioticos", icon: "syringe", description: "Para tratamento de infecções bacterianas." },
    { id: 12, name: "Azitromicina", category: "antibioticos", icon: "syringe", description: "Antibiótico de amplo espectro, uso oral." },
    { id: 13, name: "Cefalexina", category: "antibioticos", icon: "syringe", description: "Indicado para infecções respiratórias e de pele." },
    { id: 14, name: "Clindamicina", category: "antibioticos", icon: "syringe", description: "Utilizado em infecções dentárias e ósseas." },
    { id: 15, name: "Doxiciclina", category: "antibioticos", icon: "syringe", description: "Usado para tratar acne e algumas ISTs." },
    { id: 16, name: "Metronidazol", category: "antibioticos", icon: "syringe", description: "Eficaz contra protozoários e bactérias anaeróbias." },
    { id: 17, name: "Levofloxacino", category: "antibioticos", icon: "syringe", description: "Para infecções complexas do trato urinário." },
    { id: 18, name: "Sulfametoxazol + Trimetoprima", category: "antibioticos", icon: "syringe", description: "Conhecido como Bactrim, para diversas infecções." },
    { id: 19, name: "Penicilina G Benzatina", category: "antibioticos", icon: "syringe", description: "Antibiótico injetável de longa duração." },
    { id: 20, name: "Clarinsan", category: "antibioticos", icon: "syringe", description: "Para infecções do sistema respiratório." },
    
    // Medicamentos para Pressão (10 produtos) [cite: 17]
    { id: 21, name: "Captopril 25mg", category: "pressao", icon: "heart", description: "Inibidor da ECA para controle da hipertensão." },
    { id: 22, name: "Losartana 50mg", category: "pressao", icon: "heart", description: "Bloqueador de receptores de angiotensina II." },
    { id: 23, name: "Amlodipino", category: "pressao", icon: "heart", description: "Bloqueador dos canais de cálcio." },
    { id: 24, name: "Hidroclorotiazida", category: "pressao", icon: "heart", description: "Diurético usado no tratamento da pressão alta." },
    { id: 25, name: "Propranolol", category: "pressao", icon: "heart", description: "Betabloqueador para arritmia e hipertensão." },
    { id: 26, name: "Enalapril", category: "pressao", icon: "heart", description: "Para insuficiência cardíaca e hipertensão." },
    { id: 27, name: "Atenolol", category: "pressao", icon: "heart", description: "Controla a frequência cardíaca e a pressão." },
    { id: 28, name: "Valsartana", category: "pressao", icon: "heart", description: "Alternativa à Losartana com ação similar." },
    { id: 29, name: "Clonidina", category: "pressao", icon: "heart", description: "Usada para tratar hipertensão resistente." },
    { id: 30, name: "Furosemida", category: "pressao", icon: "heart", description: "Diurético de alça potente." },
    
    // Medicamentos para Diabetes (10 produtos) [cite: 18]
    { id: 31, name: "Metformina 500mg", category: "diabetes", icon: "syringe", description: "Controla a glicose em diabéticos tipo 2." },
    { id: 32, name: "Glibenclamida", category: "diabetes", icon: "syringe", description: "Estimula a produção de insulina." },
    { id: 33, name: "Insulina NPH (Caneta)", category: "diabetes", icon: "syringe", description: "Insulina de ação intermediária." },
    { id: 34, name: "Insulina R (Caneta)", category: "diabetes", icon: "syringe", description: "Insulina de ação rápida." },
    { id: 35, name: "Dapagliflozina", category: "diabetes", icon: "syringe", description: "Bloqueador SGLT2 para reduzir a glicose renal." },
    { id: 36, name: "Liraglutida", category: "diabetes", icon: "syringe", description: "Agonista do receptor GLP-1." },
    { id: 37, name: "Sitagliptina", category: "diabetes", icon: "syringe", description: "Inibidor da DPP-4." },
    { id: 38, name: "Pioglitazona", category: "diabetes", icon: "syringe", description: "Melhora a sensibilidade à insulina." },
    { id: 39, name: "Acarbose", category: "diabetes", icon: "syringe", description: "Retarda a absorção de carboidratos." },
    { id: 40, name: "Glucerna Pó", category: "diabetes", icon: "flask", description: "Suplemento alimentar para controle glicêmico." },
    
    // Medicamentos para Estômago (10 produtos) [cite: 19]
    { id: 41, name: "Omeprazol 20mg", category: "estomago", icon: "tablets", description: "Inibidor da bomba de prótons (IBP) para úlceras e refluxo." },
    { id: 42, name: "Ranitidina", category: "estomago", icon: "tablets", description: "Bloqueador H2 (uso restrito)." },
    { id: 43, name: "Pantoprazol", category: "estomago", icon: "tablets", description: "Reduz a produção de ácido estomacal." },
    { id: 44, name: "Hidróxido de Alumínio", category: "estomago", icon: "prescription-bottle", description: "Antiácido e protetor da mucosa." },
    { id: 45, name: "Dimeticona", category: "estomago", icon: "capsules", description: "Para alívio de gases e cólicas." },
    { id: 46, name: "Domperidona", category: "estomago", icon: "tablets", description: "Estimula a motilidade gastrointestinal." },
    { id: 47, name: "Metoclopramida", category: "estomago", icon: "tablets", description: "Para náuseas e vômitos." },
    { id: 48, name: "Lactulose", category: "estomago", icon: "prescription-bottle", description: "Laxativo suave." },
    { id: 49, name: "Sertalina", category: "estomago", icon: "tablets", description: "Protetor gástrico para uso específico." },
    { id: 50, name: "Miralax", category: "estomago", icon: "prescription-bottle", description: "Laxante osmótico." },
    
    // Vitaminas e Suplementos (10 produtos) [cite: 20]
    { id: 51, name: "Vitamina C 1000mg", category: "vitaminas", icon: "capsules", description: "Reforça o sistema imunológico." },
    { id: 52, name: "Complexo B", category: "vitaminas", icon: "capsules", description: "Auxilia no metabolismo energético." },
    { id: 53, name: "Ômega 3", category: "vitaminas", icon: "fish", description: "Saúde cardiovascular e cerebral." },
    { id: 54, name: "Vitamina D 5000UI", category: "vitaminas", icon: "sun", description: "Essencial para ossos e imunidade." },
    { id: 55, name: "Creatina Monohidratada", category: "vitaminas", icon: "flask", description: "Suplemento para performance muscular." },
    { id: 56, name: "Whey Protein", category: "vitaminas", icon: "flask", description: "Suplemento proteico para ganho de massa." },
    { id: 57, name: "Cálcio + D3", category: "vitaminas", icon: "capsules", description: "Fortalece ossos e dentes." },
    { id: 58, name: "Polivitamínico A-Z", category: "vitaminas", icon: "capsules", description: "Suplemento completo de vitaminas e minerais." },
    { id: 59, name: "Ferro Quelato", category: "vitaminas", icon: "capsules", description: "Para tratamento de anemia." },
    { id: 60, name: "Magnésio Dimalato", category: "vitaminas", icon: "capsules", description: "Auxilia na função muscular e nervosa." },
    
    // Medicamentos Respiratórios (10 produtos) [cite: 21]
    { id: 61, name: "Salbutamol Spray", category: "respiratorios", icon: "lungs", description: "Broncodilatador para asma." },
    { id: 62, name: "Budesonida (Inalador)", category: "respiratorios", icon: "lungs", description: "Corticosteroide inalatório para controle." },
    { id: 63, name: "Berotec", category: "respiratorios", icon: "lungs", description: "Para alívio de crise de bronquite." },
    { id: 64, name: "Acetilcisteína Xarope", category: "respiratorios", icon: "lungs", description: "Expectorante e mucolítico." },
    { id: 65, name: "Desloratadina", category: "respiratorios", icon: "lungs", description: "Anti-histamínico para rinite alérgica." },
    { id: 66, name: "Montelucaste", category: "respiratorios", icon: "lungs", description: "Tratamento de asma e rinite." },
    { id: 67, name: "Dexametasona Elixir", category: "respiratorios", icon: "lungs", description: "Anti-inflamatório esteroide." },
    { id: 68, name: "Allegra", category: "respiratorios", icon: "lungs", description: "Antialérgico não sedante." },
    { id: 69, name: "Sorine", category: "respiratorios", icon: "lungs", description: "Descongestionante nasal." },
    { id: 70, name: "Nasonex", category: "respiratorios", icon: "lungs", description: "Spray nasal para alergias." },

    // Medicamentos Neurológicos (10 produtos) [cite: 22]
    { id: 71, name: "Rivotril (Clonazepam)", category: "neurologicos", icon: "brain", description: "Tratamento de ansiedade e epilepsia." },
    { id: 72, name: "Fluoxetina", category: "neurologicos", icon: "brain", description: "Antidepressivo (ISRS)." },
    { id: 73, name: "Sertralina", category: "neurologicos", icon: "brain", description: "Para depressão, ansiedade e TOC." },
    { id: 74, name: "Buspirona", category: "neurologicos", icon: "brain", description: "Ansiolítico não benzodiazepínico." },
    { id: 75, name: "Gabapentina", category: "neurologicos", icon: "brain", description: "Para dor neuropática e convulsões." },
    { id: 76, name: "Lamotrigina", category: "neurologicos", icon: "brain", description: "Estabilizador de humor." },
    { id: 77, name: "Prometazina", category: "neurologicos", icon: "brain", description: "Antiemético e sedativo." },
    { id: 78, name: "Diazepam", category: "neurologicos", icon: "brain", description: "Ansiolítico e relaxante muscular." },
    { id: 79, name: "Zolpidem", category: "neurologicos", icon: "brain", description: "Indutor do sono (Hipnótico)." },
    { id: 80, name: "Tegretol", category: "neurologicos", icon: "brain", description: "Para convulsões e dor neuropática." },

    // Medicamentos Dermatológicos (10 produtos) [cite: 23]
    { id: 81, name: "Hipoglós Pomada", category: "dermatologicos", icon: "hand-sparkles", description: "Creme para assaduras e irritações de pele." },
    { id: 82, name: "Creme Cicatrizante", category: "dermatologicos", icon: "hand-sparkles", description: "Acelera a regeneração da pele." },
    { id: 83, name: "Cetoconazol Shampoo", category: "dermatologicos", icon: "hand-sparkles", description: "Tratamento para caspa e dermatite seborreica." },
    { id: 84, name: "Peróxido de Benzoíla", category: "dermatologicos", icon: "hand-sparkles", description: "Tratamento tópico para acne." },
    { id: 85, name: "Ácido Retinóico", category: "dermatologicos", icon: "hand-sparkles", description: "Para renovação celular e anti-idade." },
    { id: 86, name: "Protetor Solar FPS 60", category: "dermatologicos", icon: "sun", description: "Proteção UVA/UVB de alta performance." },
    { id: 87, name: "Tretinoína", category: "dermatologicos", icon: "hand-sparkles", description: "Derivado da Vitamina A para acne severa." },
    { id: 88, name: "Miconazol Creme", category: "dermatologicos", icon: "hand-sparkles", description: "Tratamento para micoses." },
    { id: 89, name: "Bepantol Derma", category: "dermatologicos", icon: "hand-sparkles", description: "Hidratação intensa para lábios e áreas secas." },
    { id: 90, name: "Sulfadiazina de Prata", category: "dermatologicos", icon: "hand-sparkles", description: "Para tratamento de queimaduras." },

    // Medicamentos Ginecológicos (10 produtos) [cite: 24]
    { id: 91, name: "Fluconazol 150mg", category: "ginecologicos", icon: "venus", description: "Tratamento de candidíase vaginal." },
    { id: 92, name: "Miconazol Óvulo", category: "ginecologicos", icon: "venus", description: "Antifúngico vaginal." },
    { id: 93, name: "Ácido Fólico", category: "ginecologicos", icon: "venus", description: "Suplemento essencial na gestação." },
    { id: 94, name: "Pílula Anticoncepcional Combinada", category: "ginecologicos", icon: "venus", description: "Controle hormonal de rotina." },
    { id: 95, name: "Progesterona", category: "ginecologicos", icon: "venus", description: "Para reposição hormonal." },
    { id: 96, name: "Clotrimazol Creme", category: "ginecologicos", icon: "venus", description: "Para infecções fúngicas externas." },
    { id: 97, name: "Tibolona", category: "ginecologicos", icon: "venus", description: "Para sintomas da menopausa." },
    { id: 98, name: "Gestinol 28", category: "ginecologicos", icon: "venus", description: "Contraceptivo de uso contínuo." },
    { id: 99, name: "Methergin", category: "ginecologicos", icon: "venus", description: "Usado em pós-parto para contração uterina." },
    { id: 100, name: "Primolut Nor", category: "ginecologicos", icon: "venus", description: "Para tratamento de distúrbios menstruais." },
];

const productsGrid = document.getElementById('productsGrid');
const productSearchInput = document.getElementById('productSearch');
const categoryFilter = document.getElementById('categoryFilter');
const noResultsMessage = document.getElementById('noResults');

/**
 * Renderiza os cards de produtos na grid.
 * @param {Array} products - Lista de produtos a serem exibidos.
 */
function renderProducts(products) {
    productsGrid.innerHTML = ''; // Limpa a grid
    
    if (products.length === 0) {
        noResultsMessage.style.display = 'block';
        return;
    }
    
    noResultsMessage.style.display = 'none';

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.setAttribute('data-category', product.category);

        // Gera o ícone Font Awesome com base na categoria
        const iconClasses = {
            'analgesicos': 'fas fa-pills',
            'antibioticos': 'fas fa-syringe',
            'pressao': 'fas fa-heart',
            'diabetes': 'fas fa-syringe',
            'estomago': 'fas fa-tablets',
            'vitaminas': 'fas fa-capsules', // Padrão
            'respiratorios': 'fas fa-lungs',
            'neurologicos': 'fas fa-brain',
            'dermatologicos': 'fas fa-hand-sparkles',
            'ginecologicos': 'fas fa-venus'
        };
        const iconHtml = `<i class="${iconClasses[product.category] || 'fas fa-medkit'}"></i>`;

        card.innerHTML = `
            ${iconHtml}
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">Consulte o preço</p>
            <button class="cta-button add-to-cart">
                <i class="fas fa-shopping-cart"></i> Adicionar
            </button>
        `;
        productsGrid.appendChild(card);
    });
}

/**
 * Filtra e busca produtos com base no input de busca e no filtro de categoria.
 */
function filterAndSearchProducts() {
    const searchTerm = productSearchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    const filteredProducts = productsData.filter(product => {
        // 1. Filtro por categoria (se selecionada)
        const matchesCategory = selectedCategory === "" || product.category === selectedCategory;

        // 2. Busca por nome (em tempo real)
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        
        // Retorna apenas se corresponderem ao filtro E à busca [cite: 57]
        return matchesCategory && matchesSearch;
    });

    renderProducts(filteredProducts);
}

/**
 * Função para rolagem suave ao clicar nos links de navegação.
 * @param {string} sectionId - O ID da seção para onde rolar.
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave [cite: 63]
    }
}


// Adiciona Listeners para busca e filtro [cite: 52, 56]
document.addEventListener('DOMContentLoaded', () => {
    // Renderiza todos os produtos ao carregar a página
    renderProducts(productsData); 

    // Adiciona event listener para o campo de busca de produtos
    productSearchInput.addEventListener('input', filterAndSearchProducts); 

    // Adiciona event listener para o filtro de categoria
    categoryFilter.addEventListener('change', filterAndSearchProducts);

    // Adiciona funcionalidade para o botão CTA da seção Hero
    const ctaButton = document.querySelector('.hero .cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            scrollToSection('produtos');
        });
    }
});