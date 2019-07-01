export default class RestoService {
    _apiBase = 'http://localhost:3001'
    async getAllItems(url) {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`An error has occurred in fetching ${url}, with status: ${res.status}`);
        }

        return await res.json();
    }

    async getMenuItems() {
        return await this.getAllItems('/menu/');
    }
}