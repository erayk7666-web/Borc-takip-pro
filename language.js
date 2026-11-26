(function () {
  'use strict';

  const LANG_KEY = 'borcCepLanguage';

  const LANGUAGES = {
    tr: { name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
    en: { name: 'English', flag: '🇬🇧', dir: 'ltr' },
    de: { name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
    fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' },
    es: { name: 'Español', flag: '🇪🇸', dir: 'ltr' },
    ru: { name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
    ar: { name: 'العربية', flag: '🇸🇦', dir: 'rtl' }
  };

  const translations = {

    en: {
      'Borçlarını ve ödemelerini kolayca takip et': 'Easily track your debts and payments',
      'Toplam Borç': 'Total Debt',
      'Kalan Borç': 'Remaining Debt',
      'Genel İlerleme': 'Overall Progress',
      'Yeni Borç Ekle': 'Add New Debt',
      '＋ Yeni Borç Ekle': '＋ Add New Debt',
      'Borçlarım': 'My Debts',
      'Profesyonel İstatistikler': 'Professional Statistics',
      'Toplam': 'Total',
      'Ödenen': 'Paid',
      'Kalan': 'Remaining',
      'Borç Sayısı': 'Number of Debts',
      'Borç Dağılımı': 'Debt Distribution',
      'Borç Tutarları': 'Debt Amounts',
      'Ödeme Geçmişi': 'Payment History',
      'Filtrele': 'Filter',
      'Borç': 'Debt',
      'Tarih': 'Date',
      'Tutar': 'Amount',
      'Henüz ödeme yok.': 'No payments yet.',
      'Gelişmiş Ödeme Takvimi': 'Advanced Payment Calendar',
      'Yaklaşan Ödemeler': 'Upcoming Payments',
      'Tüm Borçlar': 'All Debts',
      'Ana Sayfa': 'Home',
      'İstatistik': 'Statistics',
      'Ödemeler': 'Payments',
      'Takvim': 'Calendar',
      'Borçlar': 'Debts',
      'Ayarlar': 'Settings',
      'Borç adı': 'Debt name',
      'Toplam borç (₺)': 'Total debt (₺)',
      'Aylık taksit (₺)': 'Monthly installment (₺)',
      'İlk ödeme tarihi': 'First payment date',
      'Vazgeç': 'Cancel',
      'Kaydet': 'Save',
      'Borcu Düzenle': 'Edit Debt',
      'Ödeme Yap': 'Make Payment',
      'Ödeme tutarı (₺)': 'Payment amount (₺)',
      'Ödeme tarihi': 'Payment date',
      'Ödemeyi Kaydet': 'Save Payment',
      'Ödemeyi Düzenle': 'Edit Payment',
      'Güncelle': 'Update',
      'Uygulamanın kilidini açmak için PIN gir.': 'Enter your PIN to unlock the application.',
      'Kilidi Aç': 'Unlock',
      'Borç kaydedildi.': 'Debt saved.',
      'Borç silindi.': 'Debt deleted.',
      'Ödeme kaydedildi.': 'Payment saved.',
      'Ödeme kaydı silindi.': 'Payment record deleted.',
      'Ödeme tutarı': 'Payment amount',
      'Aylık taksit': 'Monthly installment',
      'İlk ödeme': 'First payment',
      'Borç adı': 'Debt name',
      'Henüz borç yok.': 'No debts yet.',
      'Ödenen Tutar': 'Paid Amount',
      'Kalan Tutar': 'Remaining Amount',
      'Durum': 'Status',
      'Tamamlandı': 'Completed',
      'Devam Ediyor': 'In Progress',
      'Bekliyor': 'Pending',
      'Ödeme': 'Payment',
      'Ödemeler': 'Payments',
      'Sil': 'Delete',
      'Düzenle': 'Edit',
      'Detay': 'Details',
      'Kapat': 'Close',
      'Evet': 'Yes',
      'Hayır': 'No',
      'Vazgeç': 'Cancel'
    },

    de: {
      'Borçlarını ve ödemelerini kolayca takip et': 'Verfolge deine Schulden und Zahlungen einfach',
      'Toplam Borç': 'Gesamtschulden',
      'Kalan Borç': 'Verbleibende Schulden',
      'Genel İlerleme': 'Gesamtfortschritt',
      'Yeni Borç Ekle': 'Neue Schuld hinzufügen',
      '＋ Yeni Borç Ekle': '＋ Neue Schuld hinzufügen',
      'Borçlarım': 'Meine Schulden',
      'Profesyonel İstatistikler': 'Professionelle Statistiken',
      'Toplam': 'Gesamt',
      'Ödenen': 'Bezahlt',
      'Kalan': 'Verbleibend',
      'Borç Sayısı': 'Anzahl der Schulden',
      'Borç Dağılımı': 'Schuldenverteilung',
      'Borç Tutarları': 'Schuldbeträge',
      'Ödeme Geçmişi': 'Zahlungsverlauf',
      'Filtrele': 'Filtern',
      'Borç': 'Schuld',
      'Tarih': 'Datum',
      'Tutar': 'Betrag',
      'Henüz ödeme yok.': 'Noch keine Zahlungen.',
      'Gelişmiş Ödeme Takvimi': 'Erweiterter Zahlungskalender',
      'Yaklaşan Ödemeler': 'Anstehende Zahlungen',
      'Tüm Borçlar': 'Alle Schulden',
      'Ana Sayfa': 'Startseite',
      'İstatistik': 'Statistik',
      'Ödemeler': 'Zahlungen',
      'Takvim': 'Kalender',
      'Borçlar': 'Schulden',
      'Ayarlar': 'Einstellungen',
      'Borç adı': 'Name der Schuld',
      'Toplam borç (₺)': 'Gesamtschuld (₺)',
      'Aylık taksit (₺)': 'Monatliche Rate (₺)',
      'İlk ödeme tarihi': 'Erstes Zahlungsdatum',
      'Vazgeç': 'Abbrechen',
      'Kaydet': 'Speichern',
      'Borcu Düzenle': 'Schuld bearbeiten',
      'Ödeme Yap': 'Zahlung leisten',
      'Ödeme tutarı (₺)': 'Zahlungsbetrag (₺)',
      'Ödeme tarihi': 'Zahlungsdatum',
      'Ödemeyi Kaydet': 'Zahlung speichern',
      'Ödemeyi Düzenle': 'Zahlung bearbeiten',
      'Güncelle': 'Aktualisieren',
      'Kilidi Aç': 'Entsperren',
      'Borç kaydedildi.': 'Schuld gespeichert.',
      'Borç silindi.': 'Schuld gelöscht.',
      'Ödeme kaydedildi.': 'Zahlung gespeichert.',
      'Ödeme kaydı silindi.': 'Zahlung gelöscht.'
    },

    fr: {
      'Borçlarını ve ödemelerini kolayca takip et': 'Suivez facilement vos dettes et vos paiements',
      'Toplam Borç': 'Dette totale',
      'Kalan Borç': 'Dette restante',
      'Genel İlerleme': 'Progression générale',
      'Yeni Borç Ekle': 'Ajouter une dette',
      '＋ Yeni Borç Ekle': '＋ Ajouter une dette',
      'Borçlarım': 'Mes dettes',
      'Profesyonel İstatistikler': 'Statistiques professionnelles',
      'Toplam': 'Total',
      'Ödenen': 'Payé',
      'Kalan': 'Restant',
      'Borç Sayısı': 'Nombre de dettes',
      'Borç Dağılımı': 'Répartition des dettes',
      'Borç Tutarları': 'Montants des dettes',
      'Ödeme Geçmişi': 'Historique des paiements',
      'Filtrele': 'Filtrer',
      'Borç': 'Dette',
      'Tarih': 'Date',
      'Tutar': 'Montant',
      'Henüz ödeme yok.': 'Aucun paiement pour le moment.',
      'Gelişmiş Ödeme Takvimi': 'Calendrier de paiement avancé',
      'Yaklaşan Ödemeler': 'Paiements à venir',
      'Tüm Borçlar': 'Toutes les dettes',
      'Ana Sayfa': 'Accueil',
      'İstatistik': 'Statistiques',
      'Ödemeler': 'Paiements',
      'Takvim': 'Calendrier',
      'Borçlar': 'Dettes',
      'Ayarlar': 'Paramètres',
      'Borç adı': 'Nom de la dette',
      'Toplam borç (₺)': 'Dette totale (₺)',
      'Aylık taksit (₺)': 'Mensualité (₺)',
      'İlk ödeme tarihi': 'Date du premier paiement',
      'Vazgeç': 'Annuler',
      'Kaydet': 'Enregistrer',
      'Borcu Düzenle': 'Modifier la dette',
      'Ödeme Yap': 'Effectuer un paiement',
      'Ödeme tutarı (₺)': 'Montant du paiement (₺)',
      'Ödeme tarihi': 'Date du paiement',
      'Ödemeyi Kaydet': 'Enregistrer le paiement',
      'Ödemeyi Düzenle': 'Modifier le paiement',
      'Güncelle': 'Mettre à jour',
      'Kilidi Aç': 'Déverrouiller',
      'Borç kaydedildi.': 'Dette enregistrée.',
      'Borç silindi.': 'Dette supprimée.',
      'Ödeme kaydedildi.': 'Paiement enregistré.',
      'Ödeme kaydı silindi.': 'Paiement supprimé.'
    },

    es: {
      'Borçlarını ve ödemelerini kolayca takip et': 'Controla fácilmente tus deudas y pagos',
      'Toplam Borç': 'Deuda total',
      'Kalan Borç': 'Deuda restante',
      'Genel İlerleme': 'Progreso general',
      'Yeni Borç Ekle': 'Añadir deuda',
      '＋ Yeni Borç Ekle': '＋ Añadir deuda',
      'Borçlarım': 'Mis deudas',
      'Profesyonel İstatistikler': 'Estadísticas profesionales',
      'Toplam': 'Total',
      'Ödenen': 'Pagado',
      'Kalan': 'Restante',
      'Borç Sayısı': 'Número de deudas',
      'Borç Dağılımı': 'Distribución de deudas',
      'Borç Tutarları': 'Importes de deuda',
      'Ödeme Geçmişi': 'Historial de pagos',
      'Filtrele': 'Filtrar',
      'Borç': 'Deuda',
      'Tarih': 'Fecha',
      'Tutar': 'Importe',
      'Henüz ödeme yok.': 'Aún no hay pagos.',
      'Gelişmiş Ödeme Takvimi': 'Calendario de pagos avanzado',
      'Yaklaşan Ödemeler': 'Próximos pagos',
      'Tüm Borçlar': 'Todas las deudas',
      'Ana Sayfa': 'Inicio',
      'İstatistik': 'Estadísticas',
      'Ödemeler': 'Pagos',
      'Takvim': 'Calendario',
      'Borçlar': 'Deudas',
      'Ayarlar': 'Configuración',
      'Borç adı': 'Nombre de la deuda',
      'Toplam borç (₺)': 'Deuda total (₺)',
      'Aylık taksit (₺)': 'Cuota mensual (₺)',
      'İlk ödeme tarihi': 'Fecha del primer pago',
      'Vazgeç': 'Cancelar',
      'Kaydet': 'Guardar',
      'Borcu Düzenle': 'Editar deuda',
      'Ödeme Yap': 'Realizar pago',
      'Ödeme tutarı (₺)': 'Importe del pago (₺)',
      'Ödeme tarihi': 'Fecha del pago',
      'Ödemeyi Kaydet': 'Guardar pago',
      'Ödemeyi Düzenle': 'Editar pago',
      'Güncelle': 'Actualizar',
      'Kilidi Aç': 'Desbloquear',
      'Borç kaydedildi.': 'Deuda guardada.',
      'Borç silindi.': 'Deuda eliminada.',
      'Ödeme kaydedildi.': 'Pago guardado.',
      'Ödeme kaydı silindi.': 'Pago eliminado.'
    },

    ru: {
      'Borçlarını ve ödemelerini kolayca takip et': 'Легко отслеживайте свои долги и платежи',
      'Toplam Borç': 'Общий долг',
      'Kalan Borç': 'Оставшийся долг',
      'Genel İlerleme': 'Общий прогресс',
      'Yeni Borç Ekle': 'Добавить долг',
      '＋ Yeni Borç Ekle': '＋ Добавить долг',
      'Borçlarım': 'Мои долги',
      'Profesyonel İstatistikler': 'Профессиональная статистика',
      'Toplam': 'Всего',
      'Ödenen': 'Оплачено',
      'Kalan': 'Осталось',
      'Borç Sayısı': 'Количество долгов',
      'Borç Dağılımı': 'Распределение долгов',
      'Borç Tutarları': 'Суммы долгов',
      'Ödeme Geçmişi': 'История платежей',
      'Filtrele': 'Фильтр',
      'Borç': 'Долг',
      'Tarih': 'Дата',
      'Tutar': 'Сумма',
      'Henüz ödeme yok.': 'Платежей пока нет.',
      'Gelişmiş Ödeme Takvimi': 'Расширенный календарь платежей',
      'Yaklaşan Ödemeler': 'Предстоящие платежи',
      'Tüm Borçlar': 'Все долги',
      'Ana Sayfa': 'Главная',
      'İstatistik': 'Статистика',
      'Ödemeler': 'Платежи',
      'Takvim': 'Календарь',
      'Borçlar': 'Долги',
      'Ayarlar': 'Настройки',
      'Borç adı': 'Название долга',
      'Toplam borç (₺)': 'Общий долг (₺)',
      'Aylık taksit (₺)': 'Ежемесячный платеж (₺)',
      'İlk ödeme tarihi': 'Дата первого платежа',
      'Vazgeç': 'Отмена',
      'Kaydet': 'Сохранить',
      'Borcu Düzenle': 'Изменить долг',
      'Ödeme Yap': 'Внести платеж',
      'Ödeme tutarı (₺)': 'Сумма платежа (₺)',
      'Ödeme tarihi': 'Дата платежа',
      'Ödemeyi Kaydet': 'Сохранить платеж',
      'Ödemeyi Düzenle': 'Изменить платеж',
      'Güncelle': 'Обновить',
      'Kilidi Aç': 'Разблокировать',
      'Borç kaydedildi.': 'Долг сохранён.',
      'Borç silindi.': 'Долг удалён.',
      'Ödeme kaydedildi.': 'Платёж сохранён.',
      'Ödeme kaydı silindi.': 'Платёж удалён.'
    },

    ar: {
      'Borçlarını ve ödemelerini kolayca takip et': 'تتبع ديونك ومدفوعاتك بسهولة',
      'Toplam Borç': 'إجمالي الديون',
      'Kalan Borç': 'الديون المتبقية',
      'Genel İlerleme': 'التقدم العام',
      'Yeni Borç Ekle': 'إضافة دين جديد',
      '＋ Yeni Borç Ekle': '＋ إضافة دين جديد',
      'Borçlarım': 'ديوني',
      'Profesyonel İstatistikler': 'إحصائيات احترافية',
      'Toplam': 'الإجمالي',
      'Ödenen': 'المدفوع',
      'Kalan': 'المتبقي',
      'Borç Sayısı': 'عدد الديون',
      'Borç Dağılımı': 'توزيع الديون',
      'Borç Tutarları': 'مبالغ الديون',
      'Ödeme Geçmişi': 'سجل المدفوعات',
      'Filtrele': 'تصفية',
      'Borç': 'الدين',
      'Tarih': 'التاريخ',
      'Tutar': 'المبلغ',
      'Henüz ödeme yok.': 'لا توجد مدفوعات حتى الآن.',
      'Gelişmiş Ödeme Takvimi': 'تقويم المدفوعات المتقدم',
      'Yaklaşan Ödemeler': 'المدفوعات القادمة',
      'Tüm Borçlar': 'جميع الديون',
      'Ana Sayfa': 'الرئيسية',
      'İstatistik': 'الإحصائيات',
      'Ödemeler': 'المدفوعات',
      'Takvim': 'التقويم',
      'Borçlar': 'الديون',
      'Ayarlar': 'الإعدادات',
      'Borç adı': 'اسم الدين',
      'Toplam borç (₺)': 'إجمالي الدين (₺)',
      'Aylık taksit (₺)': 'القسط الشهري (₺)',
      'İlk ödeme tarihi': 'تاريخ أول دفعة',
      'Vazgeç': 'إلغاء',
      'Kaydet': 'حفظ',
      'Borcu Düzenle': 'تعديل الدين',
      'Ödeme Yap': 'إجراء دفعة',
      'Ödeme tutarı (₺)': 'مبلغ الدفعة (₺)',
      'Ödeme tarihi': 'تاريخ الدفع',
      'Ödemeyi Kaydet': 'حفظ الدفعة',
      'Ödemeyi Düzenle': 'تعديل الدفعة',
      'Güncelle': 'تحديث',
      'Kilidi Aç': 'فتح القفل',
      'Borç kaydedildi.': 'تم حفظ الدين.',
      'Borç silindi.': 'تم حذف الدين.',
      'Ödeme kaydedildi.': 'تم حفظ الدفعة.',
      'Ödeme kaydı silindi.': 'تم حذف الدفعة.'
    }

  };

  let currentLang = localStorage.getItem(LANG_KEY) || 'tr';

  if (!LANGUAGES[currentLang]) {
    currentLang = 'tr';
  }

  function translateText(text) {
    if (currentLang === 'tr') return text;

    let result = text;

    const dictionary = translations[currentLang] || {};

    Object.keys(dictionary)
      .sort((a, b) => b.length - a.length)
      .forEach(function (key) {
        result = result.split(key).join(dictionary[key]);
      });

    return result;
  }

  function translateNode(node) {
    if (!node) return;

    if (node.nodeType === Node.TEXT_NODE) {
      if (node.textContent.trim()) {
        node.textContent = translateText(node.textContent);
      }
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;

    if (node.hasAttribute('placeholder')) {
      node.setAttribute(
        'placeholder',
        translateText(node.getAttribute('placeholder'))
      );
    }

    if (node.hasAttribute('title')) {
      node.setAttribute(
        'title',
        translateText(node.getAttribute('title'))
      );
    }

    node.childNodes.forEach(translateNode);
  }

  function translatePage() {
    document.body.childNodes.forEach(translateNode);

    document.documentElement.lang = currentLang;
    document.documentElement.dir = LANGUAGES[currentLang].dir;

    updateLanguageButton();
  }

  function createLanguageButton() {

    if (document.getElementById('languageButton')) return;

    const button = document.createElement('button');

    button.id = 'languageButton';

    button.style.cssText = `
      position:fixed;
      top:14px;
      right:68px;
      z-index:9999;
      border:0;
      border-radius:12px;
      padding:9px 12px;
      background:#ffffff;
      color:#0f172a;
      font-size:12px;
      font-weight:800;
      box-shadow:0 4px 14px #0002;
      cursor:pointer;
    `;

    button.onclick = function () {
      openLanguageMenu();
    };

    document.body.appendChild(button);

    updateLanguageButton();
  }

  function updateLanguageButton() {

    const button = document.getElementById('languageButton');

    if (!button) return;

    button.textContent =
      LANGUAGES[currentLang].flag +
      ' ' +
      currentLang.toUpperCase();
  }

  function openLanguageMenu() {

    const old = document.getElementById('languageMenu');

    if (old) {
      old.remove();
      return;
    }

    const menu = document.createElement('div');

    menu.id = 'languageMenu';

    menu.style.cssText = `
      position:fixed;
      top:60px;
      right:14px;
      z-index:10000;
      width:190px;
      background:#ffffff;
      border-radius:16px;
      padding:8px;
      box-shadow:0 10px 35px #0003;
      border:1px solid #e5e7eb;
    `;

    Object.keys(LANGUAGES).forEach(function (code) {

      const lang = LANGUAGES[code];

      const item = document.createElement('button');

      item.style.cssText = `
        width:100%;
        border:0;
        background:${code === currentLang ? '#eef2ff' : 'transparent'};
        color:#111827;
        padding:11px;
        border-radius:10px;
        text-align:left;
        font-weight:700;
        cursor:pointer;
        font-size:13px;
      `;

      item.textContent =
        lang.flag + '  ' +
        lang.name +
        (code === currentLang ? ' ✓' : '');

      item.onclick = function () {

        currentLang = code;

        localStorage.setItem(
          LANG_KEY,
          currentLang
        );

        location.reload();
      };

      menu.appendChild(item);
    });

    document.body.appendChild(menu);
  }

  function startObserver() {

    const observer =
