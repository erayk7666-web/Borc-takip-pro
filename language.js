const translations = {
  tr: {
    appName: "BorçCep",
    home: "Ana Sayfa",
    debts: "Borçlar",
    statistics: "İstatistik",
    payments: "Ödemeler",
    calendar: "Takvim",
    totalDebt: "Toplam Borç",
    remainingDebt: "Kalan Borç",
    progress: "Genel İlerleme",
    addDebt: "Yeni Borç Ekle",
    myDebts: "Borçlarım",
    noDebts: "Henüz borç eklenmedi.",
    addFirstDebt: "Yukarıdaki butondan ilk borcunu ekleyebilirsin.",
    settings: "Ayarlar",
    language: "Dil"
  },

  en: {
    appName: "BorçCep",
    home: "Home",
    debts: "Debts",
    statistics: "Statistics",
    payments: "Payments",
    calendar: "Calendar",
    totalDebt: "Total Debt",
    remainingDebt: "Remaining Debt",
    progress: "Overall Progress",
    addDebt: "Add New Debt",
    myDebts: "My Debts",
    noDebts: "No debts added yet.",
    addFirstDebt: "You can add your first debt using the button above.",
    settings: "Settings",
    language: "Language"
  },

  de: {
    appName: "BorçCep",
    home: "Startseite",
    debts: "Schulden",
    statistics: "Statistik",
    payments: "Zahlungen",
    calendar: "Kalender",
    totalDebt: "Gesamtschulden",
    remainingDebt: "Verbleibende Schulden",
    progress: "Gesamtfortschritt",
    addDebt: "Neue Schuld hinzufügen",
    myDebts: "Meine Schulden",
    noDebts: "Noch keine Schulden hinzugefügt.",
    addFirstDebt: "Du kannst deine erste Schuld über die Schaltfläche oben hinzufügen.",
    settings: "Einstellungen",
    language: "Sprache"
  },

  fr: {
    appName: "BorçCep",
    home: "Accueil",
    debts: "Dettes",
    statistics: "Statistiques",
    payments: "Paiements",
    calendar: "Calendrier",
    totalDebt: "Dette totale",
    remainingDebt: "Dette restante",
    progress: "Progression générale",
    addDebt: "Ajouter une nouvelle dette",
    myDebts: "Mes dettes",
    noDebts: "Aucune dette ajoutée pour le moment.",
    addFirstDebt: "Vous pouvez ajouter votre première dette avec le bouton ci-dessus.",
    settings: "Paramètres",
    language: "Langue"
  },

  es: {
    appName: "BorçCep",
    home: "Inicio",
    debts: "Deudas",
    statistics: "Estadísticas",
    payments: "Pagos",
    calendar: "Calendario",
    totalDebt: "Deuda total",
    remainingDebt: "Deuda restante",
    progress: "Progreso general",
    addDebt: "Añadir nueva deuda",
    myDebts: "Mis deudas",
    noDebts: "Aún no se han añadido deudas.",
    addFirstDebt: "Puedes añadir tu primera deuda usando el botón de arriba.",
    settings: "Ajustes",
    language: "Idioma"
  },

  it: {
    appName: "BorçCep",
    home: "Home",
    debts: "Debiti",
    statistics: "Statistiche",
    payments: "Pagamenti",
    calendar: "Calendario",
    totalDebt: "Debito totale",
    remainingDebt: "Debito residuo",
    progress: "Progresso generale",
    addDebt: "Aggiungi nuovo debito",
    myDebts: "I miei debiti",
    noDebts: "Nessun debito aggiunto.",
    addFirstDebt: "Puoi aggiungere il tuo primo debito usando il pulsante qui sopra.",
    settings: "Impostazioni",
    language: "Lingua"
  },

  ru: {
    appName: "BorçCep",
    home: "Главная",
    debts: "Долги",
    statistics: "Статистика",
    payments: "Платежи",
    calendar: "Календарь",
    totalDebt: "Общая сумма долгов",
    remainingDebt: "Оставшийся долг",
    progress: "Общий прогресс",
    addDebt: "Добавить новый долг",
    myDebts: "Мои долги",
    noDebts: "Долги пока не добавлены.",
    addFirstDebt: "Вы можете добавить свой первый долг с помощью кнопки выше.",
    settings: "Настройки",
    language: "Язык"
  }
};

function getLanguage() {
  return localStorage.getItem("borcCepLanguage") || "tr";
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  localStorage.setItem("borcCepLanguage", lang);
  applyLanguage();
}

function t(key) {
  const lang = getLanguage();

  return translations[lang]?.[key]
    || translations.tr[key]
    || key;
}

function applyLanguage() {
  document.documentElement.lang = getLanguage();

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    element.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.placeholder = t(key);
  });
}
