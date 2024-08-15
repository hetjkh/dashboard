import React from "react";

const Settings = () => {
  return (
    <div>
      <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
        <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
          Settings
        </h1>
        <div className="tab tab-enter">
          <div className="sm:container md:p-6 p-4 w-full mx-auto bg-white  dark:bg-gray-800 dark:text-gray-200 rounded-lg">
            <form>
              <div className="grid grid-cols-12 font-sans">
                <div className="col-span-12 md:col-span-12 lg:col-span-12 mr-3">
                  <div className="lg:px-6 pt-4 lg:pl-40 lg:pr-40 md:pl-5 md:pr-5 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                        Number of images per product
                      </label>
                      <div className="sm:col-span-3">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="number"
                          name="number_of_image_per_product"
                          placeholder="Number of images per product"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm text-gray-600 font-semibold dark:text-gray-400 mb-1 sm:col-span-2">
                        Default currency
                      </label>
                      <div className="sm:col-span-3">
                        <div className="col-span-8 sm:col-span-4">
                          <select
                            className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5"
                            name="default_currency"
                          >
                            <option value="e">EGP</option>
                            <option value="£">Pound</option>
                            <option value="$">Dollar</option>
                            <option value="€">Euro</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                        Default time zone
                      </label>
                      <div className="sm:col-span-3">
                        <select
                          className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5"
                          name="default_time_zone"
                        >
                          <option value hidden>
                            Default Time Zone
                          </option>
                          <option
                            value="Pacific/Midway"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Midway (GMT-11:00)
                          </option>
                          <option
                            value="Pacific/Niue"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Niue (GMT-11:00)
                          </option>
                          <option
                            value="Pacific/Pago_Pago"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Pago_Pago (GMT-11:00)
                          </option>
                          <option
                            value="America/Adak"
                            className="py-12 hover:bg-white"
                          >
                            America/Adak (GMT-10:00)
                          </option>
                          <option
                            value="Pacific/Honolulu"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Honolulu (GMT-10:00)
                          </option>
                          <option
                            value="Pacific/Rarotonga"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Rarotonga (GMT-10:00)
                          </option>
                          <option
                            value="Pacific/Tahiti"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Tahiti (GMT-10:00)
                          </option>
                          <option
                            value="Pacific/Marquesas"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Marquesas (GMT-09:30)
                          </option>
                          <option
                            value="America/Anchorage"
                            className="py-12 hover:bg-white"
                          >
                            America/Anchorage (GMT-09:00)
                          </option>
                          <option
                            value="America/Juneau"
                            className="py-12 hover:bg-white"
                          >
                            America/Juneau (GMT-09:00)
                          </option>
                          <option
                            value="America/Metlakatla"
                            className="py-12 hover:bg-white"
                          >
                            America/Metlakatla (GMT-09:00)
                          </option>
                          <option
                            value="America/Nome"
                            className="py-12 hover:bg-white"
                          >
                            America/Nome (GMT-09:00)
                          </option>
                          <option
                            value="America/Sitka"
                            className="py-12 hover:bg-white"
                          >
                            America/Sitka (GMT-09:00)
                          </option>
                          <option
                            value="America/Yakutat"
                            className="py-12 hover:bg-white"
                          >
                            America/Yakutat (GMT-09:00)
                          </option>
                          <option
                            value="Pacific/Gambier"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Gambier (GMT-09:00)
                          </option>
                          <option
                            value="America/Los_Angeles"
                            className="py-12 hover:bg-white"
                          >
                            America/Los_Angeles (GMT-08:00)
                          </option>
                          <option
                            value="America/Tijuana"
                            className="py-12 hover:bg-white"
                          >
                            America/Tijuana (GMT-08:00)
                          </option>
                          <option
                            value="America/Vancouver"
                            className="py-12 hover:bg-white"
                          >
                            America/Vancouver (GMT-08:00)
                          </option>
                          <option
                            value="Pacific/Pitcairn"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Pitcairn (GMT-08:00)
                          </option>
                          <option
                            value="America/Boise"
                            className="py-12 hover:bg-white"
                          >
                            America/Boise (GMT-07:00)
                          </option>
                          <option
                            value="America/Cambridge_Bay"
                            className="py-12 hover:bg-white"
                          >
                            America/Cambridge_Bay (GMT-07:00)
                          </option>
                          <option
                            value="America/Chihuahua"
                            className="py-12 hover:bg-white"
                          >
                            America/Chihuahua (GMT-07:00)
                          </option>
                          <option
                            value="America/Creston"
                            className="py-12 hover:bg-white"
                          >
                            America/Creston (GMT-07:00)
                          </option>
                          <option
                            value="America/Dawson"
                            className="py-12 hover:bg-white"
                          >
                            America/Dawson (GMT-07:00)
                          </option>
                          <option
                            value="America/Dawson_Creek"
                            className="py-12 hover:bg-white"
                          >
                            America/Dawson_Creek (GMT-07:00)
                          </option>
                          <option
                            value="America/Denver"
                            className="py-12 hover:bg-white"
                          >
                            America/Denver (GMT-07:00)
                          </option>
                          <option
                            value="America/Edmonton"
                            className="py-12 hover:bg-white"
                          >
                            America/Edmonton (GMT-07:00)
                          </option>
                          <option
                            value="America/Fort_Nelson"
                            className="py-12 hover:bg-white"
                          >
                            America/Fort_Nelson (GMT-07:00)
                          </option>
                          <option
                            value="America/Hermosillo"
                            className="py-12 hover:bg-white"
                          >
                            America/Hermosillo (GMT-07:00)
                          </option>
                          <option
                            value="America/Inuvik"
                            className="py-12 hover:bg-white"
                          >
                            America/Inuvik (GMT-07:00)
                          </option>
                          <option
                            value="America/Mazatlan"
                            className="py-12 hover:bg-white"
                          >
                            America/Mazatlan (GMT-07:00)
                          </option>
                          <option
                            value="America/Ojinaga"
                            className="py-12 hover:bg-white"
                          >
                            America/Ojinaga (GMT-07:00)
                          </option>
                          <option
                            value="America/Phoenix"
                            className="py-12 hover:bg-white"
                          >
                            America/Phoenix (GMT-07:00)
                          </option>
                          <option
                            value="America/Whitehorse"
                            className="py-12 hover:bg-white"
                          >
                            America/Whitehorse (GMT-07:00)
                          </option>
                          <option
                            value="America/Yellowknife"
                            className="py-12 hover:bg-white"
                          >
                            America/Yellowknife (GMT-07:00)
                          </option>
                          <option
                            value="America/Bahia_Banderas"
                            className="py-12 hover:bg-white"
                          >
                            America/Bahia_Banderas (GMT-06:00)
                          </option>
                          <option
                            value="America/Belize"
                            className="py-12 hover:bg-white"
                          >
                            America/Belize (GMT-06:00)
                          </option>
                          <option
                            value="America/Chicago"
                            className="py-12 hover:bg-white"
                          >
                            America/Chicago (GMT-06:00)
                          </option>
                          <option
                            value="America/Costa_Rica"
                            className="py-12 hover:bg-white"
                          >
                            America/Costa_Rica (GMT-06:00)
                          </option>
                          <option
                            value="America/El_Salvador"
                            className="py-12 hover:bg-white"
                          >
                            America/El_Salvador (GMT-06:00)
                          </option>
                          <option
                            value="America/Guatemala"
                            className="py-12 hover:bg-white"
                          >
                            America/Guatemala (GMT-06:00)
                          </option>
                          <option
                            value="America/Indiana/Knox"
                            className="py-12 hover:bg-white"
                          >
                            America/Indiana/Knox (GMT-06:00)
                          </option>
                          <option
                            value="America/Indiana/Tell_City"
                            className="py-12 hover:bg-white"
                          >
                            America/Indiana/Tell_City (GMT-06:00)
                          </option>
                          <option
                            value="America/Managua"
                            className="py-12 hover:bg-white"
                          >
                            America/Managua (GMT-06:00)
                          </option>
                          <option
                            value="America/Matamoros"
                            className="py-12 hover:bg-white"
                          >
                            America/Matamoros (GMT-06:00)
                          </option>
                          <option
                            value="America/Menominee"
                            className="py-12 hover:bg-white"
                          >
                            America/Menominee (GMT-06:00)
                          </option>
                          <option
                            value="America/Merida"
                            className="py-12 hover:bg-white"
                          >
                            America/Merida (GMT-06:00)
                          </option>
                          <option
                            value="America/Mexico_City"
                            className="py-12 hover:bg-white"
                          >
                            America/Mexico_City (GMT-06:00)
                          </option>
                          <option
                            value="America/Monterrey"
                            className="py-12 hover:bg-white"
                          >
                            America/Monterrey (GMT-06:00)
                          </option>
                          <option
                            value="America/North_Dakota/Beulah"
                            className="py-12 hover:bg-white"
                          >
                            America/North_Dakota/Beulah (GMT-06:00)
                          </option>
                          <option
                            value="America/North_Dakota/Center"
                            className="py-12 hover:bg-white"
                          >
                            America/North_Dakota/Center (GMT-06:00)
                          </option>
                          <option
                            value="America/North_Dakota/New_Salem"
                            className="py-12 hover:bg-white"
                          >
                            America/North_Dakota/New_Salem (GMT-06:00)
                          </option>
                          <option
                            value="America/Rainy_River"
                            className="py-12 hover:bg-white"
                          >
                            America/Rainy_River (GMT-06:00)
                          </option>
                          <option
                            value="America/Rankin_Inlet"
                            className="py-12 hover:bg-white"
                          >
                            America/Rankin_Inlet (GMT-06:00)
                          </option>
                          <option
                            value="America/Regina"
                            className="py-12 hover:bg-white"
                          >
                            America/Regina (GMT-06:00)
                          </option>
                          <option
                            value="America/Resolute"
                            className="py-12 hover:bg-white"
                          >
                            America/Resolute (GMT-06:00)
                          </option>
                          <option
                            value="America/Swift_Current"
                            className="py-12 hover:bg-white"
                          >
                            America/Swift_Current (GMT-06:00)
                          </option>
                          <option
                            value="America/Tegucigalpa"
                            className="py-12 hover:bg-white"
                          >
                            America/Tegucigalpa (GMT-06:00)
                          </option>
                          <option
                            value="America/Winnipeg"
                            className="py-12 hover:bg-white"
                          >
                            America/Winnipeg (GMT-06:00)
                          </option>
                          <option
                            value="Pacific/Easter"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Easter (GMT-06:00)
                          </option>
                          <option
                            value="Pacific/Galapagos"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Galapagos (GMT-06:00)
                          </option>
                          <option
                            value="America/Atikokan"
                            className="py-12 hover:bg-white"
                          >
                            America/Atikokan (GMT-05:00)
                          </option>
                          <option
                            value="America/Bogota"
                            className="py-12 hover:bg-white"
                          >
                            America/Bogota (GMT-05:00)
                          </option>
                          <option
                            value="America/Cancun"
                            className="py-12 hover:bg-white"
                          >
                            America/Cancun (GMT-05:00)
                          </option>
                          <option
                            value="America/Cayman"
                            className="py-12 hover:bg-white"
                          >
                            America/Cayman (GMT-05:00)
                          </option>
                          <option
                            value="America/Detroit"
                            className="py-12 hover:bg-white"
                          >
                            America/Detroit (GMT-05:00)
                          </option>
                          <option
                            value="America/Eirunepe"
                            className="py-12 hover:bg-white"
                          >
                            America/Eirunepe (GMT-05:00)
                          </option>
                          <option
                            value="America/Grand_Turk"
                            className="py-12 hover:bg-white"
                          >
                            America/Grand_Turk (GMT-05:00)
                          </option>
                          <option
                            value="America/Guayaquil"
                            className="py-12 hover:bg-white"
                          >
                            America/Guayaquil (GMT-05:00)
                          </option>
                          <option
                            value="America/Havana"
                            className="py-12 hover:bg-white"
                          >
                            America/Havana (GMT-05:00)
                          </option>
                          <option
                            value="America/Indiana/Indianapolis"
                            className="py-12 hover:bg-white"
                          >
                            America/Indiana/Indianapolis (GMT-05:00)
                          </option>
                          <option
                            value="America/Indiana/Marengo"
                            className="py-12 hover:bg-white"
                          >
                            America/Indiana/Marengo (GMT-05:00)
                          </option>
                          <option
                            value="America/Indiana/Petersburg"
                            className="py-12 hover:bg-white"
                          >
                            America/Indiana/Petersburg (GMT-05:00)
                          </option>
                          <option
                            value="America/Indiana/Vevay"
                            className="py-12 hover:bg-white"
                          >
                            America/Indiana/Vevay (GMT-05:00)
                          </option>
                          <option
                            value="America/Indiana/Vincennes"
                            className="py-12 hover:bg-white"
                          >
                            America/Indiana/Vincennes (GMT-05:00)
                          </option>
                          <option
                            value="America/Indiana/Winamac"
                            className="py-12 hover:bg-white"
                          >
                            America/Indiana/Winamac (GMT-05:00)
                          </option>
                          <option
                            value="America/Iqaluit"
                            className="py-12 hover:bg-white"
                          >
                            America/Iqaluit (GMT-05:00)
                          </option>
                          <option
                            value="America/Jamaica"
                            className="py-12 hover:bg-white"
                          >
                            America/Jamaica (GMT-05:00)
                          </option>
                          <option
                            value="America/Kentucky/Louisville"
                            className="py-12 hover:bg-white"
                          >
                            America/Kentucky/Louisville (GMT-05:00)
                          </option>
                          <option
                            value="America/Kentucky/Monticello"
                            className="py-12 hover:bg-white"
                          >
                            America/Kentucky/Monticello (GMT-05:00)
                          </option>
                          <option
                            value="America/Lima"
                            className="py-12 hover:bg-white"
                          >
                            America/Lima (GMT-05:00)
                          </option>
                          <option
                            value="America/Nassau"
                            className="py-12 hover:bg-white"
                          >
                            America/Nassau (GMT-05:00)
                          </option>
                          <option
                            value="America/New_York"
                            className="py-12 hover:bg-white"
                          >
                            America/New_York (GMT-05:00)
                          </option>
                          <option
                            value="America/Nipigon"
                            className="py-12 hover:bg-white"
                          >
                            America/Nipigon (GMT-05:00)
                          </option>
                          <option
                            value="America/Panama"
                            className="py-12 hover:bg-white"
                          >
                            America/Panama (GMT-05:00)
                          </option>
                          <option
                            value="America/Pangnirtung"
                            className="py-12 hover:bg-white"
                          >
                            America/Pangnirtung (GMT-05:00)
                          </option>
                          <option
                            value="America/Port-au-Prince"
                            className="py-12 hover:bg-white"
                          >
                            America/Port-au-Prince (GMT-05:00)
                          </option>
                          <option
                            value="America/Rio_Branco"
                            className="py-12 hover:bg-white"
                          >
                            America/Rio_Branco (GMT-05:00)
                          </option>
                          <option
                            value="America/Thunder_Bay"
                            className="py-12 hover:bg-white"
                          >
                            America/Thunder_Bay (GMT-05:00)
                          </option>
                          <option
                            value="America/Toronto"
                            className="py-12 hover:bg-white"
                          >
                            America/Toronto (GMT-05:00)
                          </option>
                          <option
                            value="America/AnguillaSandy Hill"
                            className="py-12 hover:bg-white"
                          >
                            America/AnguillaSandy Hill (GMT-04:00)
                          </option>
                          <option
                            value="America/Antigua"
                            className="py-12 hover:bg-white"
                          >
                            America/Antigua (GMT-04:00)
                          </option>
                          <option
                            value="America/Aruba"
                            className="py-12 hover:bg-white"
                          >
                            America/Aruba (GMT-04:00)
                          </option>
                          <option
                            value="America/Asuncion"
                            className="py-12 hover:bg-white"
                          >
                            America/Asuncion (GMT-04:00)
                          </option>
                          <option
                            value="America/Barbados"
                            className="py-12 hover:bg-white"
                          >
                            America/Barbados (GMT-04:00)
                          </option>
                          <option
                            value="America/Blanc-Sablon"
                            className="py-12 hover:bg-white"
                          >
                            America/Blanc-Sablon (GMT-04:00)
                          </option>
                          <option
                            value="America/Boa_Vista"
                            className="py-12 hover:bg-white"
                          >
                            America/Boa_Vista (GMT-04:00)
                          </option>
                          <option
                            value="America/Campo_Grande"
                            className="py-12 hover:bg-white"
                          >
                            America/Campo_Grande (GMT-04:00)
                          </option>
                          <option
                            value="America/Caracas"
                            className="py-12 hover:bg-white"
                          >
                            America/Caracas (GMT-04:00)
                          </option>
                          <option
                            value="America/Cuiaba"
                            className="py-12 hover:bg-white"
                          >
                            America/Cuiaba (GMT-04:00)
                          </option>
                          <option
                            value="America/Curacao"
                            className="py-12 hover:bg-white"
                          >
                            America/Curacao (GMT-04:00)
                          </option>
                          <option
                            value="America/Dominica"
                            className="py-12 hover:bg-white"
                          >
                            America/Dominica (GMT-04:00)
                          </option>
                          <option
                            value="America/Glace_Bay"
                            className="py-12 hover:bg-white"
                          >
                            America/Glace_Bay (GMT-04:00)
                          </option>
                          <option
                            value="America/Goose_Bay"
                            className="py-12 hover:bg-white"
                          >
                            America/Goose_Bay (GMT-04:00)
                          </option>
                          <option
                            value="America/Grenada"
                            className="py-12 hover:bg-white"
                          >
                            America/Grenada (GMT-04:00)
                          </option>
                          <option
                            value="America/Guadeloupe"
                            className="py-12 hover:bg-white"
                          >
                            America/Guadeloupe (GMT-04:00)
                          </option>
                          <option
                            value="America/Guyana"
                            className="py-12 hover:bg-white"
                          >
                            America/Guyana (GMT-04:00)
                          </option>
                          <option
                            value="America/Halifax"
                            className="py-12 hover:bg-white"
                          >
                            America/Halifax (GMT-04:00)
                          </option>
                          <option
                            value="America/Kralendijk"
                            className="py-12 hover:bg-white"
                          >
                            America/Kralendijk (GMT-04:00)
                          </option>
                          <option
                            value="America/La_Paz"
                            className="py-12 hover:bg-white"
                          >
                            America/La_Paz (GMT-04:00)
                          </option>
                          <option
                            value="America/Lower_Princes"
                            className="py-12 hover:bg-white"
                          >
                            America/Lower_Princes (GMT-04:00)
                          </option>
                          <option
                            value="America/Manaus"
                            className="py-12 hover:bg-white"
                          >
                            America/Manaus (GMT-04:00)
                          </option>
                          <option
                            value="America/Marigot"
                            className="py-12 hover:bg-white"
                          >
                            America/Marigot (GMT-04:00)
                          </option>
                          <option
                            value="America/Martinique"
                            className="py-12 hover:bg-white"
                          >
                            America/Martinique (GMT-04:00)
                          </option>
                          <option
                            value="America/Moncton"
                            className="py-12 hover:bg-white"
                          >
                            America/Moncton (GMT-04:00)
                          </option>
                          <option
                            value="America/Montserrat"
                            className="py-12 hover:bg-white"
                          >
                            America/Montserrat (GMT-04:00)
                          </option>
                          <option
                            value="America/Porto_Velho"
                            className="py-12 hover:bg-white"
                          >
                            America/Porto_Velho (GMT-04:00)
                          </option>
                          <option
                            value="America/Port_of_Spain"
                            className="py-12 hover:bg-white"
                          >
                            America/Port_of_Spain (GMT-04:00)
                          </option>
                          <option
                            value="America/Puerto_Rico"
                            className="py-12 hover:bg-white"
                          >
                            America/Puerto_Rico (GMT-04:00)
                          </option>
                          <option
                            value="America/Santiago"
                            className="py-12 hover:bg-white"
                          >
                            America/Santiago (GMT-04:00)
                          </option>
                          <option
                            value="America/Santo_Domingo"
                            className="py-12 hover:bg-white"
                          >
                            America/Santo_Domingo (GMT-04:00)
                          </option>
                          <option
                            value="America/St_Barthelemy"
                            className="py-12 hover:bg-white"
                          >
                            America/St_Barthelemy (GMT-04:00)
                          </option>
                          <option
                            value="America/St_Kitts"
                            className="py-12 hover:bg-white"
                          >
                            America/St_Kitts (GMT-04:00)
                          </option>
                          <option
                            value="America/St_Lucia"
                            className="py-12 hover:bg-white"
                          >
                            America/St_Lucia (GMT-04:00)
                          </option>
                          <option
                            value="America/St_Thomas"
                            className="py-12 hover:bg-white"
                          >
                            America/St_Thomas (GMT-04:00)
                          </option>
                          <option
                            value="America/St_Vincent"
                            className="py-12 hover:bg-white"
                          >
                            America/St_Vincent (GMT-04:00)
                          </option>
                          <option
                            value="America/Thule"
                            className="py-12 hover:bg-white"
                          >
                            America/Thule (GMT-04:00)
                          </option>
                          <option
                            value="America/Tortola"
                            className="py-12 hover:bg-white"
                          >
                            America/Tortola (GMT-04:00)
                          </option>
                          <option
                            value="Atlantic/Bermuda"
                            className="py-12 hover:bg-white"
                          >
                            Atlantic/Bermuda (GMT-04:00)
                          </option>
                          <option
                            value="America/St_Johns"
                            className="py-12 hover:bg-white"
                          >
                            America/St_Johns (GMT-03:30)
                          </option>
                          <option
                            value="America/Araguaina"
                            className="py-12 hover:bg-white"
                          >
                            America/Araguaina (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/Buenos_Aires"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/Buenos_Aires (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/Catamarca"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/Catamarca (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/Cordoba"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/Cordoba (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/Jujuy"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/Jujuy (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/La_Rioja"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/La_Rioja (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/Mendoza"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/Mendoza (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/Rio_Gallegos"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/Rio_Gallegos (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/Salta"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/Salta (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/San_Juan"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/San_Juan (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/San_Luis"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/San_Luis (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/Tucuman"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/Tucuman (GMT-03:00)
                          </option>
                          <option
                            value="America/Argentina/Ushuaia"
                            className="py-12 hover:bg-white"
                          >
                            America/Argentina/Ushuaia (GMT-03:00)
                          </option>
                          <option
                            value="America/Bahia"
                            className="py-12 hover:bg-white"
                          >
                            America/Bahia (GMT-03:00)
                          </option>
                          <option
                            value="America/Belem"
                            className="py-12 hover:bg-white"
                          >
                            America/Belem (GMT-03:00)
                          </option>
                          <option
                            value="America/Cayenne"
                            className="py-12 hover:bg-white"
                          >
                            America/Cayenne (GMT-03:00)
                          </option>
                          <option
                            value="America/Fortaleza"
                            className="py-12 hover:bg-white"
                          >
                            America/Fortaleza (GMT-03:00)
                          </option>
                          <option
                            value="America/Godthab"
                            className="py-12 hover:bg-white"
                          >
                            America/Godthab (GMT-03:00)
                          </option>
                          <option
                            value="America/Maceio"
                            className="py-12 hover:bg-white"
                          >
                            America/Maceio (GMT-03:00)
                          </option>
                          <option
                            value="America/Miquelon"
                            className="py-12 hover:bg-white"
                          >
                            America/Miquelon (GMT-03:00)
                          </option>
                          <option
                            value="America/Montevideo"
                            className="py-12 hover:bg-white"
                          >
                            America/Montevideo (GMT-03:00)
                          </option>
                          <option
                            value="America/Paramaribo"
                            className="py-12 hover:bg-white"
                          >
                            America/Paramaribo (GMT-03:00)
                          </option>
                          <option
                            value="America/Punta_Arenas"
                            className="py-12 hover:bg-white"
                          >
                            America/Punta_Arenas (GMT-03:00)
                          </option>
                          <option
                            value="America/Recife"
                            className="py-12 hover:bg-white"
                          >
                            America/Recife (GMT-03:00)
                          </option>
                          <option
                            value="America/Santarem"
                            className="py-12 hover:bg-white"
                          >
                            America/Santarem (GMT-03:00)
                          </option>
                          <option
                            value="America/Sao_Paulo"
                            className="py-12 hover:bg-white"
                          >
                            America/Sao_Paulo (GMT-03:00)
                          </option>
                          <option
                            value="Antarctica/Palmer"
                            className="py-12 hover:bg-white"
                          >
                            Antarctica/Palmer (GMT-03:00)
                          </option>
                          <option
                            value="Antarctica/Rothera"
                            className="py-12 hover:bg-white"
                          >
                            Antarctica/Rothera (GMT-03:00)
                          </option>
                          <option
                            value="Atlantic/Stanley"
                            className="py-12 hover:bg-white"
                          >
                            Atlantic/Stanley (GMT-03:00)
                          </option>
                          <option
                            value="America/Noronha"
                            className="py-12 hover:bg-white"
                          >
                            America/Noronha (GMT-02:00)
                          </option>
                          <option
                            value="Atlantic/South_Georgia"
                            className="py-12 hover:bg-white"
                          >
                            Atlantic/South_Georgia (GMT-02:00)
                          </option>
                          <option
                            value="America/Scoresbysund"
                            className="py-12 hover:bg-white"
                          >
                            America/Scoresbysund (GMT-01:00)
                          </option>
                          <option
                            value="Atlantic/Azores"
                            className="py-12 hover:bg-white"
                          >
                            Atlantic/Azores (GMT-01:00)
                          </option>
                          <option
                            value="Atlantic/Cape_Verde"
                            className="py-12 hover:bg-white"
                          >
                            Atlantic/Cape_Verde (GMT-01:00)
                          </option>
                          <option
                            value="Africa/Abidjan"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Abidjan (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Accra"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Accra (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Bamako"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Bamako (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Banjul"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Banjul (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Bissau"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Bissau (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Casablanca"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Casablanca (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Conakry"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Conakry (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Dakar"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Dakar (GMT+00:00)
                          </option>
                          <option
                            value="Africa/El_Aaiun"
                            className="py-12 hover:bg-white"
                          >
                            Africa/El_Aaiun (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Freetown"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Freetown (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Lome"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Lome (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Monrovia"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Monrovia (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Nouakchott"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Nouakchott (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Ouagadougou"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Ouagadougou (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Sao_Tome"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Sao_Tome (GMT+00:00)
                          </option>
                          <option
                            value="America/Danmarkshavn"
                            className="py-12 hover:bg-white"
                          >
                            America/Danmarkshavn (GMT+00:00)
                          </option>
                          <option
                            value="Antarctica/Troll"
                            className="py-12 hover:bg-white"
                          >
                            Antarctica/Troll (GMT+00:00)
                          </option>
                          <option
                            value="Atlantic/Canary"
                            className="py-12 hover:bg-white"
                          >
                            Atlantic/Canary (GMT+00:00)
                          </option>
                          <option
                            value="Atlantic/Faroe"
                            className="py-12 hover:bg-white"
                          >
                            Atlantic/Faroe (GMT+00:00)
                          </option>
                          <option
                            value="Atlantic/Madeira"
                            className="py-12 hover:bg-white"
                          >
                            Atlantic/Madeira (GMT+00:00)
                          </option>
                          <option
                            value="Atlantic/Reykjavik"
                            className="py-12 hover:bg-white"
                          >
                            Atlantic/Reykjavik (GMT+00:00)
                          </option>
                          <option
                            value="Atlantic/St_Helena"
                            className="py-12 hover:bg-white"
                          >
                            Atlantic/St_Helena (GMT+00:00)
                          </option>
                          <option
                            value="Europe/Dublin"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Dublin (GMT+00:00)
                          </option>
                          <option
                            value="Europe/Guernsey"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Guernsey (GMT+00:00)
                          </option>
                          <option
                            value="Europe/Isle_of_Man"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Isle_of_Man (GMT+00:00)
                          </option>
                          <option
                            value="Europe/Jersey"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Jersey (GMT+00:00)
                          </option>
                          <option
                            value="Europe/Lisbon"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Lisbon (GMT+00:00)
                          </option>
                          <option
                            value="Europe/London"
                            className="py-12 hover:bg-white"
                          >
                            Europe/London (GMT+00:00)
                          </option>
                          <option
                            value="Africa/Algiers"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Algiers (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Bangui"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Bangui (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Brazzaville"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Brazzaville (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Ceuta"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Ceuta (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Douala"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Douala (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Kinshasa"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Kinshasa (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Lagos"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Lagos (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Libreville"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Libreville (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Luanda"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Luanda (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Malabo"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Malabo (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Ndjamena"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Ndjamena (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Niamey"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Niamey (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Porto-Novo"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Porto-Novo (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Tunis"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Tunis (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Windhoek"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Windhoek (GMT+01:00)
                          </option>
                          <option
                            value="Arctic/Longyearbyen"
                            className="py-12 hover:bg-white"
                          >
                            Arctic/Longyearbyen (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Amsterdam"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Amsterdam (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Andorra"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Andorra (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Belgrade"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Belgrade (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Berlin"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Berlin (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Bratislava"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Bratislava (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Brussels"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Brussels (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Budapest"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Budapest (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Copenhagen"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Copenhagen (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Gibraltar"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Gibraltar (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Ljubljana"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Ljubljana (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Luxembourg"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Luxembourg (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Madrid"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Madrid (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Malta"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Malta (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Monaco"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Monaco (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Oslo"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Oslo (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Paris"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Paris (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Podgorica"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Podgorica (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Prague"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Prague (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Rome"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Rome (GMT+01:00)
                          </option>
                          <option
                            value="Europe/San_Marino"
                            className="py-12 hover:bg-white"
                          >
                            Europe/San_Marino (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Sarajevo"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Sarajevo (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Skopje"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Skopje (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Stockholm"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Stockholm (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Tirane"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Tirane (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Vaduz"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Vaduz (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Vatican"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Vatican (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Vienna"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Vienna (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Warsaw"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Warsaw (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Zagreb"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Zagreb (GMT+01:00)
                          </option>
                          <option
                            value="Europe/Zurich"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Zurich (GMT+01:00)
                          </option>
                          <option
                            value="Africa/Blantyre"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Blantyre (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Bujumbura"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Bujumbura (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Cairo"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Cairo (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Gaborone"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Gaborone (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Harare"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Harare (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Johannesburg"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Johannesburg (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Juba"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Juba (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Khartoum"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Khartoum (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Kigali"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Kigali (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Lubumbashi"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Lubumbashi (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Lusaka"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Lusaka (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Maputo"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Maputo (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Maseru"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Maseru (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Mbabane"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Mbabane (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Tripoli"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Tripoli (GMT+02:00)
                          </option>
                          <option
                            value="Asia/Amman"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Amman (GMT+02:00)
                          </option>
                          <option
                            value="Asia/Beirut"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Beirut (GMT+02:00)
                          </option>
                          <option
                            value="Asia/Damascus"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Damascus (GMT+02:00)
                          </option>
                          <option
                            value="Asia/Famagusta"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Famagusta (GMT+02:00)
                          </option>
                          <option
                            value="Asia/Gaza"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Gaza (GMT+02:00)
                          </option>
                          <option
                            value="Asia/Hebron"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Hebron (GMT+02:00)
                          </option>
                          <option
                            value="Asia/Jerusalem"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Jerusalem (GMT+02:00)
                          </option>
                          <option
                            value="Asia/Nicosia"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Nicosia (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Athens"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Athens (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Bucharest"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Bucharest (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Chisinau"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Chisinau (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Helsinki"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Helsinki (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Kaliningrad"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Kaliningrad (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Kiev"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Kiev (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Mariehamn"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Mariehamn (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Riga"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Riga (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Sofia"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Sofia (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Tallinn"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Tallinn (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Uzhgorod"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Uzhgorod (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Vilnius"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Vilnius (GMT+02:00)
                          </option>
                          <option
                            value="Europe/Zaporozhye"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Zaporozhye (GMT+02:00)
                          </option>
                          <option
                            value="Africa/Addis_Ababa"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Addis_Ababa (GMT+03:00)
                          </option>
                          <option
                            value="Africa/Asmara"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Asmara (GMT+03:00)
                          </option>
                          <option
                            value="Africa/Dar_es_Salaam"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Dar_es_Salaam (GMT+03:00)
                          </option>
                          <option
                            value="Africa/Djibouti"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Djibouti (GMT+03:00)
                          </option>
                          <option
                            value="Africa/Kampala"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Kampala (GMT+03:00)
                          </option>
                          <option
                            value="Africa/Mogadishu"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Mogadishu (GMT+03:00)
                          </option>
                          <option
                            value="Africa/Nairobi"
                            className="py-12 hover:bg-white"
                          >
                            Africa/Nairobi (GMT+03:00)
                          </option>
                          <option
                            value="Antarctica/Syowa"
                            className="py-12 hover:bg-white"
                          >
                            Antarctica/Syowa (GMT+03:00)
                          </option>
                          <option
                            value="Asia/Aden"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Aden (GMT+03:00)
                          </option>
                          <option
                            value="Asia/Baghdad"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Baghdad (GMT+03:00)
                          </option>
                          <option
                            value="Asia/Bahrain"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Bahrain (GMT+03:00)
                          </option>
                          <option
                            value="Asia/Kuwait"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Kuwait (GMT+03:00)
                          </option>
                          <option
                            value="Asia/Qatar"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Qatar (GMT+03:00)
                          </option>
                          <option
                            value="Asia/Riyadh"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Riyadh (GMT+03:00)
                          </option>
                          <option
                            value="Europe/Istanbul"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Istanbul (GMT+03:00)
                          </option>
                          <option
                            value="Europe/Kirov"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Kirov (GMT+03:00)
                          </option>
                          <option
                            value="Europe/Minsk"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Minsk (GMT+03:00)
                          </option>
                          <option
                            value="Europe/Moscow"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Moscow (GMT+03:00)
                          </option>
                          <option
                            value="Europe/Simferopol"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Simferopol (GMT+03:00)
                          </option>
                          <option
                            value="Europe/Volgograd"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Volgograd (GMT+03:00)
                          </option>
                          <option
                            value="Indian/Antananarivo"
                            className="py-12 hover:bg-white"
                          >
                            Indian/Antananarivo (GMT+03:00)
                          </option>
                          <option
                            value="Indian/Comoro"
                            className="py-12 hover:bg-white"
                          >
                            Indian/Comoro (GMT+03:00)
                          </option>
                          <option
                            value="Indian/Mayotte"
                            className="py-12 hover:bg-white"
                          >
                            Indian/Mayotte (GMT+03:00)
                          </option>
                          <option
                            value="Asia/Tehran"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Tehran (GMT+03:30)
                          </option>
                          <option
                            value="Asia/Baku"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Baku (GMT+04:00)
                          </option>
                          <option
                            value="Asia/Dubai"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Dubai (GMT+04:00)
                          </option>
                          <option
                            value="Asia/Muscat"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Muscat (GMT+04:00)
                          </option>
                          <option
                            value="Asia/Tbilisi"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Tbilisi (GMT+04:00)
                          </option>
                          <option
                            value="Asia/Yerevan"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Yerevan (GMT+04:00)
                          </option>
                          <option
                            value="Europe/Astrakhan"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Astrakhan (GMT+04:00)
                          </option>
                          <option
                            value="Europe/Samara"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Samara (GMT+04:00)
                          </option>
                          <option
                            value="Europe/Saratov"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Saratov (GMT+04:00)
                          </option>
                          <option
                            value="Europe/Ulyanovsk"
                            className="py-12 hover:bg-white"
                          >
                            Europe/Ulyanovsk (GMT+04:00)
                          </option>
                          <option
                            value="Indian/Mahe"
                            className="py-12 hover:bg-white"
                          >
                            Indian/Mahe (GMT+04:00)
                          </option>
                          <option
                            value="Indian/Mauritius"
                            className="py-12 hover:bg-white"
                          >
                            Indian/Mauritius (GMT+04:00)
                          </option>
                          <option
                            value="Indian/Reunion"
                            className="py-12 hover:bg-white"
                          >
                            Indian/Reunion (GMT+04:00)
                          </option>
                          <option
                            value="Asia/Kabul"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Kabul (GMT+04:30)
                          </option>
                          <option
                            value="Antarctica/Mawson"
                            className="py-12 hover:bg-white"
                          >
                            Antarctica/Mawson (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Aqtau"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Aqtau (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Aqtobe"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Aqtobe (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Ashgabat"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Ashgabat (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Atyrau"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Atyrau (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Dushanbe"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Dushanbe (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Karachi"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Karachi (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Oral"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Oral (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Qyzylorda"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Qyzylorda (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Samarkand"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Samarkand (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Tashkent"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Tashkent (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Yekaterinburg"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Yekaterinburg (GMT+05:00)
                          </option>
                          <option
                            value="Indian/Kerguelen"
                            className="py-12 hover:bg-white"
                          >
                            Indian/Kerguelen (GMT+05:00)
                          </option>
                          <option
                            value="Indian/Maldives"
                            className="py-12 hover:bg-white"
                          >
                            Indian/Maldives (GMT+05:00)
                          </option>
                          <option
                            value="Asia/Colombo"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Colombo (GMT+05:30)
                          </option>
                          <option
                            value="Asia/Kolkata"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Kolkata (GMT+05:30)
                          </option>
                          <option
                            value="Asia/Kathmandu"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Kathmandu (GMT+05:45)
                          </option>
                          <option
                            value="Antarctica/Vostok"
                            className="py-12 hover:bg-white"
                          >
                            Antarctica/Vostok (GMT+06:00)
                          </option>
                          <option
                            value="Asia/Almaty"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Almaty (GMT+06:00)
                          </option>
                          <option
                            value="Asia/Bishkek"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Bishkek (GMT+06:00)
                          </option>
                          <option
                            value="Asia/Dhaka"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Dhaka (GMT+06:00)
                          </option>
                          <option
                            value="Asia/Omsk"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Omsk (GMT+06:00)
                          </option>
                          <option
                            value="Asia/Qostanay"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Qostanay (GMT+06:00)
                          </option>
                          <option
                            value="Asia/Thimphu"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Thimphu (GMT+06:00)
                          </option>
                          <option
                            value="Asia/Urumqi"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Urumqi (GMT+06:00)
                          </option>
                          <option
                            value="Indian/Chagos"
                            className="py-12 hover:bg-white"
                          >
                            Indian/Chagos (GMT+06:00)
                          </option>
                          <option
                            value="Asia/Yangon"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Yangon (GMT+06:30)
                          </option>
                          <option
                            value="Indian/Cocos"
                            className="py-12 hover:bg-white"
                          >
                            Indian/Cocos (GMT+06:30)
                          </option>
                          <option
                            value="Antarctica/Davis"
                            className="py-12 hover:bg-white"
                          >
                            Antarctica/Davis (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Bangkok"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Bangkok (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Barnaul"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Barnaul (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Hovd"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Hovd (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Ho_Chi_Minh"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Ho_Chi_Minh (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Jakarta"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Jakarta (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Krasnoyarsk"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Krasnoyarsk (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Novokuznetsk"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Novokuznetsk (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Novosibirsk"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Novosibirsk (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Phnom_Penh"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Phnom_Penh (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Pontianak"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Pontianak (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Tomsk"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Tomsk (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Vientiane"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Vientiane (GMT+07:00)
                          </option>
                          <option
                            value="Indian/Christmas"
                            className="py-12 hover:bg-white"
                          >
                            Indian/Christmas (GMT+07:00)
                          </option>
                          <option
                            value="Asia/Brunei"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Brunei (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Choibalsan"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Choibalsan (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Hong_Kong"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Hong_Kong (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Irkutsk"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Irkutsk (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Kuala_Lumpur"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Kuala_Lumpur (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Kuching"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Kuching (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Macau"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Macau (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Makassar"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Makassar (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Manila"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Manila (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Shanghai"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Shanghai (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Singapore"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Singapore (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Taipei"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Taipei (GMT+08:00)
                          </option>
                          <option
                            value="Asia/Ulaanbaatar"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Ulaanbaatar (GMT+08:00)
                          </option>
                          <option
                            value="Australia/Perth"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Perth (GMT+08:00)
                          </option>
                          <option
                            value="Australia/Eucla"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Eucla (GMT+08:45)
                          </option>
                          <option
                            value="Asia/Chita"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Chita (GMT+09:00)
                          </option>
                          <option
                            value="Asia/Dili"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Dili (GMT+09:00)
                          </option>
                          <option
                            value="Asia/Jayapura"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Jayapura (GMT+09:00)
                          </option>
                          <option
                            value="Asia/Khandyga"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Khandyga (GMT+09:00)
                          </option>
                          <option
                            value="Asia/Pyongyang"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Pyongyang (GMT+09:00)
                          </option>
                          <option
                            value="Asia/Seoul"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Seoul (GMT+09:00)
                          </option>
                          <option
                            value="Asia/Tokyo"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Tokyo (GMT+09:00)
                          </option>
                          <option
                            value="Asia/Yakutsk"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Yakutsk (GMT+09:00)
                          </option>
                          <option
                            value="Pacific/Palau"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Palau (GMT+09:00)
                          </option>
                          <option
                            value="Australia/Adelaide"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Adelaide (GMT+09:30)
                          </option>
                          <option
                            value="Australia/Broken_Hill"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Broken_Hill (GMT+09:30)
                          </option>
                          <option
                            value="Australia/Darwin"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Darwin (GMT+09:30)
                          </option>
                          <option
                            value="Antarctica/DumontDUrville"
                            className="py-12 hover:bg-white"
                          >
                            Antarctica/DumontDUrville (GMT+10:00)
                          </option>
                          <option
                            value="Antarctica/Macquarie"
                            className="py-12 hover:bg-white"
                          >
                            Antarctica/Macquarie (GMT+10:00)
                          </option>
                          <option
                            value="Asia/Ust-Nera"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Ust-Nera (GMT+10:00)
                          </option>
                          <option
                            value="Asia/Vladivostok"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Vladivostok (GMT+10:00)
                          </option>
                          <option
                            value="Australia/Brisbane"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Brisbane (GMT+10:00)
                          </option>
                          <option
                            value="Australia/Currie"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Currie (GMT+10:00)
                          </option>
                          <option
                            value="Australia/Hobart"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Hobart (GMT+10:00)
                          </option>
                          <option
                            value="Australia/Lindeman"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Lindeman (GMT+10:00)
                          </option>
                          <option
                            value="Australia/Melbourne"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Melbourne (GMT+10:00)
                          </option>
                          <option
                            value="Australia/Sydney"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Sydney (GMT+10:00)
                          </option>
                          <option
                            value="Pacific/Chuuk"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Chuuk (GMT+10:00)
                          </option>
                          <option
                            value="Pacific/GuamVillage"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/GuamVillage (GMT+10:00)
                          </option>
                          <option
                            value="Pacific/Port_Moresby"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Port_Moresby (GMT+10:00)
                          </option>
                          <option
                            value="Pacific/Saipan"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Saipan (GMT+10:00)
                          </option>
                          <option
                            value="Australia/Lord_Howe"
                            className="py-12 hover:bg-white"
                          >
                            Australia/Lord_Howe (GMT+10:30)
                          </option>
                          <option
                            value="Antarctica/Casey"
                            className="py-12 hover:bg-white"
                          >
                            Antarctica/Casey (GMT+11:00)
                          </option>
                          <option
                            value="Asia/Magadan"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Magadan (GMT+11:00)
                          </option>
                          <option
                            value="Asia/Sakhalin"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Sakhalin (GMT+11:00)
                          </option>
                          <option
                            value="Asia/Srednekolymsk"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Srednekolymsk (GMT+11:00)
                          </option>
                          <option
                            value="Pacific/Bougainville"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Bougainville (GMT+11:00)
                          </option>
                          <option
                            value="Pacific/Efate"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Efate (GMT+11:00)
                          </option>
                          <option
                            value="Pacific/Guadalcanal"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Guadalcanal (GMT+11:00)
                          </option>
                          <option
                            value="Pacific/Kosrae"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Kosrae (GMT+11:00)
                          </option>
                          <option
                            value="Pacific/Norfolk"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Norfolk (GMT+11:00)
                          </option>
                          <option
                            value="Pacific/Noumea"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Noumea (GMT+11:00)
                          </option>
                          <option
                            value="Pacific/Pohnpei"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Pohnpei (GMT+11:00)
                          </option>
                          <option
                            value="Antarctica/McMurdo"
                            className="py-12 hover:bg-white"
                          >
                            Antarctica/McMurdo (GMT+12:00)
                          </option>
                          <option
                            value="Asia/Anadyr"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Anadyr (GMT+12:00)
                          </option>
                          <option
                            value="Asia/Kamchatka"
                            className="py-12 hover:bg-white"
                          >
                            Asia/Kamchatka (GMT+12:00)
                          </option>
                          <option
                            value="Pacific/Auckland"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Auckland (GMT+12:00)
                          </option>
                          <option
                            value="Pacific/Fiji"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Fiji (GMT+12:00)
                          </option>
                          <option
                            value="Pacific/Funafuti"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Funafuti (GMT+12:00)
                          </option>
                          <option
                            value="Pacific/Kwajalein"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Kwajalein (GMT+12:00)
                          </option>
                          <option
                            value="Pacific/Majuro"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Majuro (GMT+12:00)
                          </option>
                          <option
                            value="Pacific/Nauru"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Nauru (GMT+12:00)
                          </option>
                          <option
                            value="Pacific/Tarawa"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Tarawa (GMT+12:00)
                          </option>
                          <option
                            value="Pacific/Wake"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Wake (GMT+12:00)
                          </option>
                          <option
                            value="Pacific/Wallis"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Wallis (GMT+12:00)
                          </option>
                          <option
                            value="Pacific/Chatham"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Chatham (GMT+12:45)
                          </option>
                          <option
                            value="Pacific/Apia"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Apia (GMT+13:00)
                          </option>
                          <option
                            value="Pacific/Enderbury"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Enderbury (GMT+13:00)
                          </option>
                          <option
                            value="Pacific/Fakaofo"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Fakaofo (GMT+13:00)
                          </option>
                          <option
                            value="Pacific/Tongatapu"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Tongatapu (GMT+13:00)
                          </option>
                          <option
                            value="Pacific/Kiritimati"
                            className="py-12 hover:bg-white"
                          >
                            Pacific/Kiritimati (GMT+14:00)
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                        Default Date Format
                      </label>
                      <div className="sm:col-span-3">
                        <select
                          className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5"
                          name="default_date_format"
                        >
                          <option value hidden>
                            Default Date Format
                          </option>
                          <option value="MMM D, YYYY">MM/DD/YYYY</option>
                          <option value="D MMM, YYYY">DD/MM/YYYY</option>
                          <option value="YYYY,MMM D">YYYY/MM/DD</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
                      <label className="block text-sm text-gray-600 font-semibold dark:text-gray-400 mb-1 sm:col-span-2">
                        Receipt size (width)
                      </label>
                      <div className="sm:col-span-3">
                        <select
                          className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5 h-12"
                          name="receipt_size"
                        >
                          <option value="57-mm">57 mm</option>
                          <option value="80-mm">80 mm</option>
                          <option value="3-1/8">3 1/8"</option>
                          <option value="2-1/4">2 1/4"</option>
                          <option value="A4">A4</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                        Shop name
                      </label>
                      <div className="sm:col-span-3">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="shop_name"
                          placeholder="Shop name"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                        Company Name
                      </label>
                      <div className="sm:col-span-3">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="company_name"
                          placeholder="Company Name"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                        Vat Number
                      </label>
                      <div className="sm:col-span-3">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="vat_number"
                          placeholder="Vat Number"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                        Address
                      </label>
                      <div className="sm:col-span-3">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="address"
                          placeholder="Address"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                        Post Code
                      </label>
                      <div className="sm:col-span-3">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="post_code"
                          placeholder="Post Code"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                        Contact
                      </label>
                      <div className=" sm:col-span-3">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="contact"
                          placeholder="Contact Number"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                        Email
                      </label>
                      <div className=" sm:col-span-3">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="email"
                          placeholder="Email"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 items-center sm:grid-cols-12 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1 sm:col-span-2">
                        Web site
                      </label>
                      <div className=" sm:col-span-3">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="website"
                          placeholder="Web Site"
                          autoComplete="new-password"
                          defaultValue
                        />
                      </div>
                    </div>
                    <div className="flex flex-row-reverse pb-6">
                      <button
                        className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 px-8"
                        type="submit"
                      >
                        {" "}
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
