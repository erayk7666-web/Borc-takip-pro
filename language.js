(function () {
  'use strict';

  const LANG_KEY = 'borcCepLanguage';

  const LANGUAGES = {
    tr: { name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
    en: { name: 'English', flag: '🇬🇧', dir: 'ltr' },
    de: { name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
    fr: { name: 'Français', flag: '🇫🇷', dir: 'ltr' },
    es: { name: 'Español', flag: '🇪🇸', dir: 'ltr' },
    it: { name: 'Italiano', flag: '🇮🇹', dir: 'ltr' },
    ru: { name: 'Русский', flag: '🇷🇺', dir: 'ltr' }
  };

  const translations = {
    en: {
      'Borç Takip Pro': 'Debt Tracker Pro',
      'BorçCep': 'BorçCep',
      'Borçlarını ve ödemelerini kolayca takip et': 'Easily track your debts and payments',
      'Toplam Borç': 'Total Debt',
      'Kalan Borç': 'Remaining Debt',
      'Genel İlerleme': 'Overall Progress',
      'Yeni Borç Ekle': 'Add New Debt',
      '＋ Yeni Borç Ekle': '＋ Add New Debt',
      'Borçlarım': 'My Debts',
      'Henüz borç eklenmedi.': 'No debts have been added yet.',
      'Yukarıdaki butondan ilk borcunu ekleyebilirsin.': 'You can add your first debt using the button above.',
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
      'Borçlar': 'Debts',
      'İstatistik': 'Statistics',
      'Ödemeler': 'Payments',
      'Takvim': 'Calendar',
      'Ayarlar': 'Settings',
      'Ayarlar & Yedekleme': 'Settings & Backup',
      'Karanlık tema': 'Dark mode',
      'Uygulamanın görünümünü değiştir.': 'Change the appearance of the application.',
      'Telefon bildirimleri': 'Phone notifications',
      'Yaklaşan ödemeler için tarayıcı bildirim izni.': 'Browser notification permission for upcoming payments.',
      'İzin Ver': 'Allow',
      'PIN kilidi': 'PIN lock',
      'PIN ayarlı': 'PIN configured',
      'Değiştir': 'Change',
      'Otomatik yedekleme': 'Automatic backup',
      'Değişikliklerde yerel yedek oluşturur.': 'Creates a local backup when changes are made.',
      'Bildirim hatırlatma süresi': 'Notification reminder period',
      '1 gün önce': '1 day before',
      'Yedek Dosyası Al': 'Download Backup',
      'Yedeği Geri Yükle': 'Restore Backup',
      'Tüm Verileri Sil': 'Delete All Data',
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
      'Ödeme tutarı': 'Payment amount',
      'Aylık taksit': 'Monthly installment',
      'İlk ödeme': 'First payment',
      'Henüz borç yok.': 'No debts yet.',
      'Ödenen Tutar': 'Paid Amount',
      'Kalan Tutar': 'Remaining Amount',
      'Durum': 'Status',
      'Tamamlandı': 'Completed',
      'Devam Ediyor': 'In Progress',
      'Bekliyor': 'Pending',
      'Ödeme': 'Payment',
      'Sil': 'Delete',
      'Düzenle': 'Edit',
      'Detay': 'Details',
      'Kapat': 'Close',
      'Evet': 'Yes',
      'Hayır': 'No',
      'Uygulamanın kilidini açmak için PIN gir.': 'Enter your PIN to unlock the application.',
      'Kilidi Aç': 'Unlock',
      'Borç kaydedildi.': 'Debt saved.',
      'Borç silindi.': 'Debt deleted.',
      'Ödeme kaydedildi.': 'Payment saved.',
      'Ödeme kaydı silindi.': 'Payment record deleted.',
      'Borç adı, toplam borç ve aylık taksit gir.': 'Enter the debt name, total debt and monthly installment.',
      'Geçersiz ödeme tutarı.': 'Invalid payment amount.',
      'Toplam borç ödenenden düşük olamaz.': 'Total debt cannot be lower than the amount already paid.',
      'Bu borç silinsin mi?': 'Delete this debt?',
      'Bu ödeme silinsin mi?': 'Delete this payment?',
      'Tüm borçlar ve ödeme kayıtları silinsin mi?': 'Delete all debts and payment records?',
      'Android/PWA altyapısı bu pakette hazır.': 'Android/PWA infrastructure is ready in this package.',
      'Gerçek arka plan push bildirimleri için yayınlanmış HTTPS adresi ve push sunucusu gerekir.': 'Real background push notifications require a published HTTPS address and a push server.',
      'tarayıcı izin sistemi tek başına kapalı uygulamada zamanlanmış bildirim garantilemez.': 'The browser permission system alone cannot guarantee scheduled notifications when the application is closed.'
    },

    de: {
      'Borç Takip Pro': 'Schulden-Tracker Pro',
      'BorçCep': 'BorçCep',
      'Borçlarını ve ödemelerini kolayca takip et': 'Verfolge deine Schulden und Zahlungen einfach',
      'Toplam Borç': 'Gesamtschulden',
      'Kalan Borç': 'Verbleibende Schulden',
      'Genel İlerleme': 'Gesamtfortschritt',
      'Yeni Borç Ekle': 'Neue Schuld hinzufügen',
      '＋ Yeni Borç Ekle': '＋ Neue Schuld hinzufügen',
      'Borçlarım': 'Meine Schulden',
      'Henüz borç eklenmedi.': 'Noch keine Schulden hinzugefügt.',
      'Yukarıdaki butondan ilk borcunu ekleyebilirsin.': 'Du kannst oben deine erste Schuld hinzufügen.',
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
      'Borçlar': 'Schulden',
      'İstatistik': 'Statistik',
      'Ödemeler': 'Zahlungen',
      'Takvim': 'Kalender',
      'Ayarlar': 'Einstellungen',
      'Ayarlar & Yedekleme': 'Einstellungen & Sicherung',
      'Karanlık tema': 'Dunkler Modus',
      'Uygulamanın görünümünü değiştir.': 'Ändere das Erscheinungsbild der Anwendung.',
      'Telefon bildirimleri': 'Telefonbenachrichtigungen',
      'Yaklaşan ödemeler için tarayıcı bildirim izni.': 'Berechtigung für Browser-Benachrichtigungen zu bevorstehenden Zahlungen.',
      'İzin Ver': 'Erlauben',
      'PIN kilidi': 'PIN-Sperre',
      'PIN ayarlı': 'PIN eingerichtet',
      'Değiştir': 'Ändern',
      'Otomatik yedekleme': 'Automatische Sicherung',
      'Değişikliklerde yerel yedek oluşturur.': 'Erstellt bei Änderungen eine lokale Sicherung.',
      'Bildirim hatırlatma süresi': 'Erinnerungszeitraum',
      '1 gün önce': '1 Tag vorher',
      'Yedek Dosyası Al': 'Sicherung herunterladen',
      'Yedeği Geri Yükle': 'Sicherung wiederherstellen',
      'Tüm Verileri Sil': 'Alle Daten löschen',
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
      'Ödeme tutarı': 'Zahlungsbetrag',
      'Aylık taksit': 'Monatliche Rate',
      'İlk ödeme': 'Erste Zahlung',
      'Henüz borç yok.': 'Noch keine Schulden.',
      'Ödenen Tutar': 'Bezahlter Betrag',
      'Kalan Tutar': 'Verbleibender Betrag',
      'Durum': 'Status',
      'Tamamlandı': 'Abgeschlossen',
      'Devam Ediyor': 'Läuft',
      'Bekliyor': 'Ausstehend',
      'Ödeme': 'Zahlung',
      'Sil': 'Löschen',
      'Düzenle': 'Bearbeiten',
      'Detay': 'Details',
      'Kapat': 'Schließen',
      'Evet': 'Ja',
      'Hayır': 'Nein',
      'Uygulamanın kilidini açmak için PIN gir.': 'Gib deine PIN ein, um die Anwendung zu entsperren.',
      'Kilidi Aç': 'Entsperren',
      'Borç kaydedildi.': 'Schuld gespeichert.',
      'Borç silindi.': 'Schuld gelöscht.',
      'Ödeme kaydedildi.': 'Zahlung gespeichert.',
      'Ödeme kaydı silindi.': 'Zahlung gelöscht.',
      'Borç adı, toplam borç ve aylık taksit gir.': 'Gib den Namen der Schuld, die Gesamtschuld und die monatliche Rate ein.',
      'Geçersiz ödeme tutarı.': 'Ungültiger Zahlungsbetrag.',
      'Toplam borç ödenenden düşük olamaz.': 'Die Gesamtschuld kann nicht niedriger als der bereits bezahlte Betrag sein.',
      'Bu borç silinsin mi?': 'Diese Schuld löschen?',
      'Bu ödeme silinsin mi?': 'Diese Zahlung löschen?',
      'Tüm borçlar ve ödeme kayıtları silinsin mi?': 'Alle Schulden und Zahlungsaufzeichnungen löschen?'
    },

    fr: {
      'Borç Takip Pro': 'Suivi des dettes Pro',
      'BorçCep': 'BorçCep',
      'Borçlarını ve ödemelerini kolayca takip et': 'Suivez facilement vos dettes et vos paiements',
      'Toplam Borç': 'Dette totale',
      'Kalan Borç': 'Dette restante',
      'Genel İlerleme': 'Progression générale',
      'Yeni Borç Ekle': 'Ajouter une dette',
      '＋ Yeni Borç Ekle': '＋ Ajouter une dette',
      'Borçlarım': 'Mes dettes',
      'Henüz borç eklenmedi.': 'Aucune dette ajoutée.',
      'Yukarıdaki butondan ilk borcunu ekleyebilirsin.': 'Ajoutez votre première dette avec le bouton ci-dessus.',
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
      'Borçlar': 'Dettes',
      'İstatistik': 'Statistiques',
      'Ödemeler': 'Paiements',
      'Takvim': 'Calendrier',
      'Ayarlar': 'Paramètres',
      'Ayarlar & Yedekleme': 'Paramètres & sauvegarde',
      'Karanlık tema': 'Mode sombre',
      'Uygulamanın görünümünü değiştir.': 'Modifier l’apparence de l’application.',
      'Telefon bildirimleri': 'Notifications du téléphone',
      'Yaklaşan ödemeler için tarayıcı bildirim izni.': 'Autorisation des notifications du navigateur pour les paiements à venir.',
      'İzin Ver': 'Autoriser',
      'PIN kilidi': 'Verrouillage PIN',
      'PIN ayarlı': 'PIN configuré',
      'Değiştir': 'Modifier',
      'Otomatik yedekleme': 'Sauvegarde automatique',
      'Değişikliklerde yerel yedek oluşturur.': 'Crée une sauvegarde locale lors des modifications.',
      'Bildirim hatırlatma süresi': 'Délai de rappel',
      '1 gün önce': '1 jour avant',
      'Yedek Dosyası Al': 'Télécharger la sauvegarde',
      'Yedeği Geri Yükle': 'Restaurer la sauvegarde',
      'Tüm Verileri Sil': 'Supprimer toutes les données',
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
      'Ödeme tutarı': 'Montant du paiement',
      'Aylık taksit': 'Mensualité',
      'İlk ödeme': 'Premier paiement',
      'Henüz borç yok.': 'Aucune dette.',
      'Ödenen Tutar': 'Montant payé',
      'Kalan Tutar': 'Montant restant',
      'Durum': 'Statut',
      'Tamamlandı': 'Terminé',
      'Devam Ediyor': 'En cours',
      'Bekliyor': 'En attente',
      'Ödeme': 'Paiement',
      'Sil': 'Supprimer',
      'Düzenle': 'Modifier',
      'Detay': 'Détails',
      'Kapat': 'Fermer',
      'Evet': 'Oui',
      'Hayır': 'Non',
      'Uygulamanın kilidini açmak için PIN gir.': 'Entrez votre PIN pour déverrouiller l’application.',
      'Kilidi Aç': 'Déverrouiller',
      'Borç kaydedildi.': 'Dette enregistrée.',
      'Borç silindi.': 'Dette supprimée.',
      'Ödeme kaydedildi.': 'Paiement enregistré.',
      'Ödeme kaydı silindi.': 'Paiement supprimé.',
      'Borç adı, toplam borç ve aylık taksit gir.': 'Entrez le nom de la dette, la dette totale et la mensualité.',
      'Geçersiz ödeme tutarı.': 'Montant du paiement invalide.',
      'Toplam borç ödenenden düşük olamaz.': 'La dette totale ne peut pas être inférieure au montant déjà payé.',
      'Bu borç silinsin mi?': 'Supprimer cette dette ?',
      'Bu ödeme silinsin mi?': 'Supprimer ce paiement ?',
      'Tüm borçlar ve ödeme kayıtları silinsin mi?': 'Supprimer toutes les dettes et tous les paiements ?'
    },

    es: {
      'Borç Takip Pro': 'Gestor de Deudas Pro',
      'BorçCep': 'BorçCep',
      'Borçlarını ve ödemelerini kolayca takip et': 'Controla fácilmente tus deudas y pagos',
      'Toplam Borç': 'Deuda total',
      'Kalan Borç': 'Deuda restante',
      'Genel İlerleme': 'Progreso general',
      'Yeni Borç Ekle': 'Añadir deuda',
      '＋ Yeni Borç Ekle': '＋ Añadir deuda',
      'Borçlarım': 'Mis deudas',
      'Henüz borç eklenmedi.': 'Aún no se han añadido deudas.',
      'Yukarıdaki butondan ilk borcunu ekleyebilirsin.': 'Puedes añadir tu primera deuda con el botón de arriba.',
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
      'Borçlar': 'Deudas',
      'İstatistik': 'Estadísticas',
      'Ödemeler': 'Pagos',
      'Takvim': 'Calendario',
      'Ayarlar': 'Configuración',
      'Ayarlar & Yedekleme': 'Configuración y copia de seguridad',
      'Karanlık tema': 'Modo oscuro',
      'Uygulamanın görünümünü değiştir.': 'Cambia el aspecto de la aplicación.',
      'Telefon bildirimleri': 'Notificaciones del teléfono',
      'Yaklaşan ödemeler için tarayıcı bildirim izni.': 'Permiso de notificaciones del navegador para próximos pagos.',
      'İzin Ver': 'Permitir',
      'PIN kilidi': 'Bloqueo PIN',
      'PIN ayarlı': 'PIN configurado',
      'Değiştir': 'Cambiar',
      'Otomatik yedekleme': 'Copia de seguridad automática',
      'Değişikliklerde yerel yedek oluşturur.': 'Crea una copia de seguridad local al realizar cambios.',
      'Bildirim hatırlatma süresi': 'Tiempo de recordatorio',
      '1 gün önce': '1 día antes',
      'Yedek Dosyası Al': 'Descargar copia de seguridad',
      'Yedeği Geri Yükle': 'Restaurar copia de seguridad',
      'Tüm Verileri Sil': 'Eliminar todos los datos',
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
      'Ödeme tutarı': 'Importe del pago',
      'Aylık taksit': 'Cuota mensual',
      'İlk ödeme': 'Primer pago',
      'Henüz borç yok.': 'Aún no hay deudas.',
      'Ödenen Tutar': 'Importe pagado',
      'Kalan Tutar': 'Importe restante',
      'Durum': 'Estado',
      'Tamamlandı': 'Completado',
      'Devam Ediyor': 'En progreso',
      'Bekliyor': 'Pendiente',
      'Ödeme': 'Pago',
      'Sil': 'Eliminar',
      'Düzenle': 'Editar',
      'Detay': 'Detalles',
      'Kapat': 'Cerrar',
      'Evet': 'Sí',
      'Hayır': 'No',
      'Uygulamanın kilidini açmak için PIN gir.': 'Introduce tu PIN para desbloquear la aplicación.',
      'Kilidi Aç': 'Desbloquear',
      'Borç kaydedildi.': 'Deuda guardada.',
      'Borç silindi.': 'Deuda eliminada.',
      'Ödeme kaydedildi.': 'Pago guardado.',
      'Ödeme kaydı silindi.': 'Pago eliminado.',
      'Borç adı, toplam borç ve aylık taksit gir.': 'Introduce el nombre de la deuda, la deuda total y la cuota mensual.',
      'Geçersiz ödeme tutarı.': 'Importe de pago no válido.',
      'Toplam borç ödenenden düşük olamaz.': 'La deuda total no puede ser inferior al importe ya pagado.',
      'Bu borç silinsin mi?': '¿Eliminar esta deuda?',
      'Bu ödeme silinsin mi?': '¿Eliminar este pago?',
      'Tüm borçlar ve ödeme kayıtları silinsin mi?': '¿Eliminar todas las deudas y los pagos?'
    },

    it: {
      'Borç Takip Pro': 'Gestione Debiti Pro',
      'BorçCep': 'BorçCep',
      'Borçlarını ve ödemelerini kolayca takip et': 'Gestisci facilmente i tuoi debiti e pagamenti',
      'Toplam Borç': 'Debito totale',
      'Kalan Borç': 'Debito rimanente',
      'Genel İlerleme': 'Progresso generale',
      'Yeni Borç Ekle': 'Aggiungi debito',
      '＋ Yeni Borç Ekle': '＋ Aggiungi debito',
      'Borçlarım': 'I miei debiti',
      'Henüz borç eklenmedi.': 'Nessun debito aggiunto.',
      'Yukarıdaki butondan ilk borcunu ekleyebilirsin.': 'Puoi aggiungere il tuo primo debito con il pulsante sopra.',
      'Profesyonel İstatistikler': 'Statistiche professionali',
      'Toplam': 'Totale',
      'Ödenen': 'Pagato',
      'Kalan': 'Rimanente',
      'Borç Sayısı': 'Numero di debiti',
      'Borç Dağılımı': 'Distribuzione dei debiti',
      'Borç Tutarları': 'Importi dei debiti',
      'Ödeme Geçmişi': 'Cronologia dei pagamenti',
      'Filtrele': 'Filtra',
      'Borç': 'Debito',
      'Tarih': 'Data',
      'Tutar': 'Importo',
      'Henüz ödeme yok.': 'Nessun pagamento ancora.',
      'Gelişmiş Ödeme Takvimi': 'Calendario dei pagamenti avanzato',
      'Yaklaşan Ödemeler': 'Prossimi pagamenti',
      'Tüm Borçlar': 'Tutti i debiti',
      'Ana Sayfa': 'Home',
      'Borçlar': 'Debiti',
      'İstatistik': 'Statistiche',
      'Ödemeler': 'Pagamenti',
      'Takvim': 'Calendario',
      'Ayarlar': 'Impostazioni',
      'Ayarlar & Yedekleme': 'Impostazioni e backup',
      'Karanlık tema': 'Modalità scura',
      'Uygulamanın görünümünü değiştir.': 'Modifica l’aspetto dell’applicazione.',
      'Telefon bildirimleri': 'Notifiche del telefono',
      'Yaklaşan ödemeler için tarayıcı bildirim izni.': 'Autorizzazione alle notifiche del browser per i prossimi pagamenti.',
      'İzin Ver': 'Consenti',
      'PIN kilidi': 'Blocco PIN',
      'PIN ayarlı': 'PIN configurato',
      'Değiştir': 'Modifica',
      'Otomatik yedekleme': 'Backup automatico',
      'Değişikliklerde yerel yedek oluşturur.': 'Crea un backup locale quando vengono apportate modifiche.',
      'Bildirim hatırlatma süresi': 'Periodo di promemoria',
      '1 gün önce': '1 giorno prima',
      'Yedek Dosyası Al': 'Scarica backup',
      'Yedeği Geri Yükle': 'Ripristina backup',
      'Tüm Verileri Sil': 'Elimina tutti i dati',
      'Borç adı': 'Nome del debito',
      'Toplam borç (₺)': 'Debito totale (₺)',
      'Aylık taksit (₺)': 'Rata mensile (₺)',
      'İlk ödeme tarihi': 'Data del primo pagamento',
      'Vazgeç': 'Annulla',
      'Kaydet': 'Salva',
      'Borcu Düzenle': 'Modifica debito',
      'Ödeme Yap': 'Effettua pagamento',
      'Ödeme tutarı (₺)': 'Importo del pagamento (₺)',
      'Ödeme tarihi': 'Data del pagamento',
      'Ödemeyi Kaydet': 'Salva pagamento',
      'Ödemeyi Düzenle': 'Modifica pagamento',
      'Güncelle': 'Aggiorna',
      'Ödeme tutarı': 'Importo del pagamento',
      'Aylık taksit': 'Rata mensile',
      'İlk ödeme': 'Primo pagamento',
      'Henüz borç yok.': 'Nessun debito.',
      'Ödenen Tutar': 'Importo pagato',
      'Kalan Tutar': 'Importo rimanente',
      'Durum': 'Stato',
      'Tamamlandı': 'Completato',
      'Devam Ediyor': 'In corso',
      'Bekliyor': 'In attesa',
      'Ödeme': 'Pagamento',
      'Sil': 'Elimina',
      'Düzenle': 'Modifica',
      'Detay': 'Dettagli',
      'Kapat': 'Chiudi',
      'Evet': 'Sì',
      'Hayır': 'No',
      'Uygulamanın kilidini açmak için PIN gir.': 'Inserisci il PIN per sbloccare l’applicazione.',
      'Kilidi Aç': 'Sblocca',
      'Borç kaydedildi.': 'Debito salvato.',
      'Borç silindi.': 'Debito eliminato.',
      'Ödeme kaydedildi.': 'Pagamento salvato.',
      'Ödeme kaydı silindi.': 'Pagamento eliminato.',
      'Borç adı, toplam borç ve aylık taksit gir.': 'Inserisci il nome del debito, il debito totale e la rata mensile.',
      'Geçersiz ödeme tutarı.': 'Importo del pagamento non valido.',
      'Toplam borç ödenenden düşük olamaz.': 'Il debito totale non può essere inferiore all’importo già pagato.',
      'Bu borç silinsin mi?': 'Eliminare questo debito?',
      'Bu ödeme silinsin mi?': 'Eliminare questo pagamento?',
      'Tüm borçlar ve ödeme kayıtları silinsin mi?': 'Eliminare tutti i debiti e i pagamenti?'
    },

    ru: {
      'Borç Takip Pro': 'Учет долгов Pro',
      'BorçCep': 'BorçCep',
      'Borçlarını ve ödemelerini kolayca takip et': 'Легко отслеживайте свои долги и платежи',
      'Toplam Borç': 'Общий долг',
      'Kalan Borç': 'Оставшийся долг',
      'Genel İlerleme': 'Общий прогресс',
      'Yeni Borç Ekle': 'Добавить долг',
      '＋ Yeni Borç Ekle': '＋ Добавить долг',
      'Borçlarım': 'Мои долги',
      'Henüz borç eklenmedi.': 'Долги пока не добавлены.',
      'Yukarıdaki butondan ilk borcunu ekleyebilirsin.': 'Вы можете добавить первый долг с помощью кнопки выше.',
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
      'Borçlar': 'Долги',
      'İstatistik': 'Статистика',
      'Ödemeler': 'Платежи',
      'Takvim': 'Календарь',
      'Ayarlar': 'Настройки',
      'Ayarlar & Yedekleme': 'Настройки и резервное копирование',
      'Karanlık tema': 'Темная тема',
      'Uygulamanın görünümünü değiştir.': 'Изменить внешний вид приложения.',
      'Telefon bildirimleri': 'Уведомления телефона',
      'Yaklaşan ödemeler için tarayıcı bildirim izni.': 'Разрешение браузерных уведомлений о предстоящих платежах.',
      'İzin Ver': 'Разрешить',
      'PIN kilidi': 'PIN-код',
      'PIN ayarlı': 'PIN настроен',
      'Değiştir': 'Изменить',
      'Otomatik yedekleme': 'Автоматическое резервное копирование',
      'Değişikliklerde yerel yedek oluşturur.': 'Создает локальную резервную копию при изменениях.',
      'Bildirim hatırlatma süresi': 'Период напоминания',
      '1 gün önce': 'За 1 день',
      'Yedek Dosyası Al': 'Скачать резервную копию',
      'Yedeği Geri Yükle': 'Восстановить резервную копию',
      'Tüm Verileri Sil': 'Удалить все данные',
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
      'Ödeme tutarı': 'Сумма платежа',
      'Aylık taksit': 'Ежемесячный платеж',
      'İlk ödeme': 'Первый платеж',
      'Henüz borç yok.': 'Долгов пока нет.',
      'Ödenen Tutar': 'Оплаченная сумма',
      'Kalan Tutar': 'Оставшаяся сумма',
      'Durum': 'Статус',
      'Tamamlandı': 'Завершено',
      'Devam Ediyor': 'В процессе',
      'Bekliyor': 'Ожидает',
      'Ödeme': 'Платеж',
      'Sil': 'Удалить',
      'Düzenle': 'Изменить',
      'Detay': 'Подробности',
      'Kapat': 'Закрыть',
      'Evet': 'Да',
      'Hayır': 'Нет',
      'Uygulamanın kilidini açmak için PIN gir.': 'Введите PIN-код, чтобы разблокировать приложение.',
      'Kilidi Aç': 'Разблокировать',
      'Borç kaydedildi.': 'Долг сохранен.',
      'Borç silindi.': 'Долг удален.',
      'Ödeme kaydedildi.': 'Платеж сохранен.',
      'Ödeme kaydı silindi.': 'Запись платежа удалена.',
      'Borç adı, toplam borç ve aylık taksit gir.': 'Введите название долга, общую сумму долга и ежемесячный платеж.',
      'Geçersiz ödeme tutarı.': 'Недопустимая сумма платежа.',
      'Toplam borç ödenenden düşük olamaz.': 'Общий долг не может быть меньше уже оплаченной суммы.',
      'Bu borç silinsin mi?': 'Удалить этот долг?',
      'Bu ödeme silinsin mi?': 'Удалить этот платеж?',
      'Tüm borçlar ve ödeme kayıtları silinsin mi?': 'Удалить все долги и записи платежей?'
    }
  };

  let currentLanguage = 'tr';
  let observerStarted = false;
  let translating = false;

  function getLanguage() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      return LANGUAGES[saved] ? saved : 'tr';
    } catch (e) {
      return 'tr';
    }
  }

  function setLanguage(lang) {
    if (!LANGUAGES[lang]) return;
    currentLanguage = lang;

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}

    document.documentElement.lang = lang;
    document.documentElement.dir = LANGUAGES[lang].dir;

    translatePage();
    updateLanguageButton();
    closeLanguageMenu();
  }

  function translateText(text) {
    if (!text) return text;
    const dictionary = translations[currentLanguage];
    if (!dictionary) return text;
    return Object.prototype.hasOwnProperty.call(dictionary, text)
      ? dictionary[text]
      : text;
  }

  function translateNode(node) {
    if (!node || translating) return;

    if (node.nodeType === Node.TEXT_NODE) {
      const original = node.nodeValue.trim();
      if (!original) return;

      const translated = translateText(original);
      if (translated !== original) {
        node.nodeValue = node.nodeValue.replace(original, translated);
      }
      return;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) return;

    const tag = node.tagName.toLowerCase();

    if (tag === 'script' || tag === 'style' || tag === 'svg') return;

    if (node.dataset && node.dataset.langOriginal === undefined) {
      node.dataset.langOriginal = node.textContent;
    }

    Array.from(node.childNodes).forEach(translateNode);

    if (node.hasAttribute('placeholder')) {
      const original = node.getAttribute('data-lang-placeholder-original') ||
        node.getAttribute('placeholder');

      if (!node.hasAttribute('data-lang-placeholder-original')) {
        node.setAttribute('data-lang-placeholder-original', original);
      }

      node.setAttribute('placeholder', translateText(original));
    }

    if (node.hasAttribute('title')) {
      const original = node.getAttribute('data-lang-title-original') ||
        node.getAttribute('title');

      if (!node.hasAttribute('data-lang-title-original')) {
        node.setAttribute('data-lang-title-original', original);
      }

      node.setAttribute('title', translateText(original));
    }
  }

  function translatePage() {
    if (!document.body || translating) return;

    translating = true;
    try {
      Array.from(document.body.childNodes).forEach(translateNode);

      document.querySelectorAll('input, textarea').forEach(function (el) {
        if (el.hasAttribute('placeholder')) {
          const original = el.getAttribute('data-lang-placeholder-original') ||
            el.getAttribute('placeholder');

          if (!el.hasAttribute('data-lang-placeholder-original')) {
            el.setAttribute('data-lang-placeholder-original', original);
          }

          el.setAttribute('placeholder', translateText(original));
        }
      });
    } finally {
      translating = false;
    }
  }

  function createLanguageButton() {
    if (document.getElementById('borcCepLanguageButton')) return;

    const button = document.createElement('button');
    button.id = 'borcCepLanguageButton';
    button.type = 'button';
    button.setAttribute('aria-label', 'Dil seçimi');
    button.textContent = LANGUAGES[currentLanguage].flag + ' ' + currentLanguage.toUpperCase();

    button.style.cssText = [
      'position:fixed',
      'top:14px',
      'right:72px',
      'z-index:99999',
      'border:0',
      'border-radius:14px',
      'padding:9px 11px',
      'background:#ffffff',
      'color:#111827',
      'font-size:14px',
      'font-weight:700',
      'box-shadow:0 4px 14px rgba(0,0,0,.18)',
      'cursor:pointer'
    ].join(';');

    button.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleLanguageMenu();
    });

    document.body.appendChild(button);
  }

  function updateLanguageButton() {
    const button = document.getElementById('borcCepLanguageButton');
    if (!button) return;

    button.textContent =
      LANGUAGES[currentLanguage].flag + ' ' + currentLanguage.toUpperCase();
  }

  function createLanguageMenu() {
    if (document.getElementById('borcCepLanguageMenu')) return;

    const menu = document.createElement('div');
    menu.id = 'borcCepLanguageMenu';

    menu.style.cssText = [
      'position:fixed',
      'top:58px',
      'right:14px',
      'z-index:100000',
      'display:none',
      'min-width:190px',
      'padding:8px',
      'background:#ffffff',
      'border-radius:16px',
      'box-shadow:0 8px 30px rgba(0,0,0,.22)',
      'border:1px solid rgba(0,0,0,.08)'
    ].join(';');

    Object.keys(LANGUAGES).forEach(function (code) {
      const lang = LANGUAGES[code];
      const item = document.createElement('button');

      item.type = 'button';
      item.dataset.language = code;
      item.textContent = lang.flag + '  ' + lang.name;
      item.style.cssText = [
        'display:block',
        'width:100%',
        'padding:11px 12px',
        'border:0',
        'border-radius:10px',
        'background:transparent',
        'color:#111827',
        'text-align:left',
        'font-size:15px',
        'font-weight:600',
        'cursor:pointer'
      ].join(';');

      item.addEventListener('mouseenter', function () {
        item.style.background = '#f1f5f9';
      });

      item.addEventListener('mouseleave', function () {
        item.style.background = 'transparent';
      });

      item.addEventListener('click', function (event) {
        event.stopPropagation();
        setLanguage(code);
      });

      menu.appendChild(item);
    });

    document.body.appendChild(menu);

    document.addEventListener('click', function (event) {
      const button = document.getElementById('borcCepLanguageButton');
      const currentMenu = document.getElementById('borcCepLanguageMenu');

      if (
        currentMenu &&
        currentMenu.style.display !== 'none' &&
        !currentMenu.contains(event.target) &&
        (!button || !button.contains(event.target))
      ) {
        closeLanguageMenu();
      }
    });
  }

  function openLanguageMenu() {
    const menu = document.getElementById('borcCepLanguageMenu');
    if (menu) menu.style.display = 'block';
  }

  function closeLanguageMenu() {
    const menu = document.getElementById('borcCepLanguageMenu');
    if (menu) menu.style.display = 'none';
  }

  function toggleLanguageMenu() {
    const menu = document.getElementById('borcCepLanguageMenu');
    if (!menu) return;

    menu.style.display =
      menu.style.display === 'none' ? 'block' : 'none';
  }

  function patchDialogs() {
    if (window.__borcCepDialogsPatched) return;
    window.__borcCepDialogsPatched = true;

    const originalAlert = window.alert.bind(window);
    const originalConfirm = window.confirm.bind(window);
    const originalPrompt = window.prompt.bind(window);

    window.alert = function (message) {
      return originalAlert(translateText(String(message)));
    };

    window.confirm = function (message) {
      return originalConfirm(translateText(String(message)));
    };

    window.prompt = function (message, defaultValue) {
      return originalPrompt(
        translateText(String(message)),
        defaultValue
      );
    };
  }

  function startObserver() {
    if (observerStarted || !window.MutationObserver) return;
    observerStarted = true;

    const observer = new MutationObserver(function (mutations) {
      if (translating) return;

      let shouldTranslate = false;

      mutations.forEach(function (mutation) {
        if (mutation.addedNodes && mutation.addedNodes.length) {
          shouldTranslate = true;
        }
      });

      if (shouldTranslate) {
        window.requestAnimationFrame(function () {
          translatePage();
          createLanguageButton();
          createLanguageMenu();
          updateLanguageButton();
        });
      }
    });

    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }
  }

  function start() {
    currentLanguage = getLanguage();

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = LANGUAGES[currentLanguage].dir;

    createLanguageButton();
    createLanguageMenu();
    translatePage();
    patchDialogs();
    startObserver();

    updateLanguageButton();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  window.BorcCepLanguage = {
    languages: LANGUAGES,
    getLanguage: function () {
      return currentLanguage;
    },
    setLanguage: setLanguage,
    translate: translateText
  };
})();
