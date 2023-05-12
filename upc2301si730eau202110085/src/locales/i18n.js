import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      home: 'Home',
      healthChecks: 'Health Checks',
      averagePerformance: 'Average Performance',
      volts: 'Volts',
      watts: 'Watts',
      hp: 'HP',
      recordId: 'Record ID',
      treadmillId: 'Treadmill ID',
      serialNumber: 'Serial Number',
      centerName: 'Center Name',
      date: 'Date',
      time: 'Time'
    },
    es: {
      home: 'Inicio',
      healthChecks: 'Chequeos de salud',
      averagePerformance: 'Rendimiento promedio',
      volts: 'Voltios',
      watts: 'Vatios',
      hp: 'HP',
      recordId: 'ID de registro',
      treadmillId: 'ID de la cinta de correr',
      serialNumber: 'Número de serie',
      centerName: 'Nombre del centro',
      date: 'Fecha',
      time: 'Hora'
    },
    fr: {
      home: 'Accueil',
      healthChecks: 'Vérifications de santé',
      averagePerformance: 'Performance moyenne',
      volts: 'Volts',
      watts: 'Watts',
      hp: 'HP',
      recordId: "ID d'enregistrement",
      treadmillId: 'ID du tapis roulant',
      serialNumber: 'Numéro de série',
      centerName: 'Nom du centre',
      date: 'Date',
      time: 'Temps'
    },
    ja: {
      home: 'ホーム',
      healthChecks: 'ヘルスチェック',
      averagePerformance: '平均パフォーマンス',
      volts: 'ボルト',
      watts: 'ワット',
      hp: 'HP',
      recordId: 'レコードID',
      treadmillId: 'トレッドミルID',
      serialNumber: 'シリアル番号',
      centerName: 'センター名',
      date: '日付',
      time: '時間'
    }
  }
})

export default i18n
