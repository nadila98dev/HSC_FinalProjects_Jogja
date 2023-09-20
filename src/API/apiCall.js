import axios from "axios"

const axiosInstance = {
    login: async() => await axios.post('https://').then((res) => res.data).catch((err) => console.log(err)),
    allitems: async(q) => await axios.get('/db.json').then((res) => {
        if(q.length < 1){
            return res.data.items
        } else {
            const data = res.data.items.filter((item)=> {
                const name = item.name.toLowerCase();
                const keyword = q.toLowerCase()

                for (let i = 0; i < keyword.length; i++) {
                    if(!name.includes(keyword[i])){
                        return false
                    }                    
                }
                return true
            })
            return data
        }
    }).catch((err) => console.log(err)),
    category: async(id) => await axios.get('/db.json').then((res) => res.data.category).catch((err) => console.log(err)),
    items: async(id) => await axios.get('/db.json').then((res) =>  res.data.items.filter((item) => item.category_id === id)).catch((err) => { console.log(err)}),
    detail: async (slug) => await axios.get('/db.json').then((res) => res.data.items.filter((item) => item.slug == slug)).catch((err) => { console.log(err)}),
    itemById: async (id) => await axios.get('/db.json').then((res) => {
        const item = res.data.items.find((item) => item.id === id);
        return item || null;
    }).catch((err) => { console.log(err) }),
}

export default axiosInstance