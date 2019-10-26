export default class BookstoreService {
    
    getBooks() {
        return [
            {   id: 1, 
                title: 'Production-Ready Microservices',
                author: 'Susan j. Fowler',
                price: 30,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg' },
            {   id: 2, 
                title: 'Release It!',
                author: 'Michael T. Nygard',
                price: '32',
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg' }
        ];
    }
}