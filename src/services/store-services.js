export default class StoreService {
    data = [
        {id: 1, title: 'Production-ready Microservices', author: 'Susan j. Fowler', price: 30, coverImage: 'https://m.media-amazon.com/images/I/71kPW3SLQSL._AC_UL320_.jpg'},
        {id: 2, title: 'Realese it!', author: 'Michael T. Nygard', price: 40, coverImage: 'https://m.media-amazon.com/images/I/41nMZPJdhsL._AC_UL320_.jpg'}
    ];
    getBooks() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.data)
                //reject(new Error('Smth bad'));
            }, 700);
        });
    };
};