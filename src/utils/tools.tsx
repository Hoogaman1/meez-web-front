/* eslint-disable import/no-anonymous-default-export */
class Tools {
    numberLangChanger(num: string | number, lang: string) {
        if (lang === 'fa') {
            const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            return num.toString().replace(/\d/g, (index: any) => farsiDigits[index]);
        }
        return num;
    }
}

export default new Tools();
