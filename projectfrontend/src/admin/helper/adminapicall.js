const { API } = require("../../backend");


//category calls
export const createCategory = (userId, token, category) => {
    return fetch(`/category/create/${userId}`, {
        method : "POST",
        headers : {
        Accept : "application/json",
        "Content-Type" : "application/json",
        Authorization : `Bearer ${token}`
        },
        body : JSON.stringify(category)
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

//get all categories
export const getCategories = () => {
    return fetch(`/categories`, {
        method : "GET"
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}

//get a category
export const getCategory = categoryId => {
    return fetch(`/category/${categoryId}`, {
        method : "GET"
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}


//UPDATE A CATEGORY
export const updateCategory = (categoryId, userId, token, category) => {
    return fetch(`/category/${categoryId}/${userId}`, {
        method : `PUT`,
        headers : {
            Accept : "application/json",
            Authorization : `Bearer ${token}`
        },
        body : JSON.stringify({
            name : category
        })
    }).then(response => response.json()).catch(err => console.log(err))
}


//delete a category
export const deleteCategory = (categoryId, userId, token) => {
    return fetch(`/category/${categoryId}/${userId}`, {
        method : "DELETE",
        headers : {
            Accept : "application/json",
            Authorization : `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}






//product calls
export const createProduct = (userId, token, product) => {
    return fetch(`/product/create/${userId}`, {
        method : "POST",
        headers : {
            Accept : "application/json",
            Authorization : `Bearer ${token}`
        },
        body : product
    })
    .then(response => response.json())
    .catch(err => console.log(err))
} 


//get all products
export const getProducts = () => {
    return fetch(`/products`, {
        method : "GET"
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}


//delete a product
export const deleteProduct = (productId, userId, token) => {
    return fetch(`/product/${productId}/${userId}`, {
        method : "DELETE",
        headers : {
            Accept : "application/json",
            Authorization : `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}


//get a product
export const getProduct = productId => {
    return fetch(`/product/${productId}`, {
        method : "GET"
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}


//update a product
export const updateProduct = (productId, userId, token, product) => {
    return fetch(`/product/${productId}/${userId}`, {
        method : "PUT",
        headers : {
            Accept : "application/json",
            Authorization : `Bearer ${token}`
        },
        body : product
    })
    .then(response => response.json())
    .catch(err => console.log(err))
}