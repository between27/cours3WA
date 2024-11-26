import axios from 'axios'

const url = "https://jsonplaceholder.typicode.com/todos/1"

interface Todo {
userId : number
id: number
title : string
completed: boolean
}

axios.get(url).then(response => {
    let todo = response.data as Todo
    console.log(todo.completed)
})

const json = '{"x":10}'

const coordinates = JSON.parse(json)
console.log(coordinates)