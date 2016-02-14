import {Injectable} from 'angular2/core'

const mockData = [
  { name: 'james', age: 14 },
  { name: 'bill', age: 11 },
  { name: 'mary', age: 16 },
  { name: 'joyce', age: 24 },
  { name: 'ryan', age: 32 },
  { name: 'fred', age: 51 },
  { name: 'stan', age: 33 },
  { name: 'jimmy', age: 55 }
]

@Injectable()
export default class ContactService {
  getAll() {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(mockData)
      }, 1500)
    })
  }
}
