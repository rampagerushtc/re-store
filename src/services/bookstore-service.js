export default class BookstoreService {
    
    getBooks() {
        return [
            {   id: 1, 
                title: 'Production-Ready Microservices',
                author: 'Susan j. Fowler' },
            {   id: 1, 
                title: 'Release It!',
                author: 'Michael T. Nygard' }
        ];
    }
}