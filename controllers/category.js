const Category = require("../models/category")


exports.getCategoryById = (req, res, next, id) => {

    Category.findById(id).exec((err, cate) => {
        if(err){
            return res.status(400).json({
                error : "Category not found in DB"
            })
        }
        req.category = cate;
        next();
    })

    
}

exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, category) => {
        if(err){
            return res.status(400).json({
                error : "Not able to save category in DB"
            })
        }

        res.json({category})
    })
}



exports.getCategory = (req, res) => {
    return res.json(req.category)
}

exports.getAllCategory = (req, res) => {
    Category.find().exec((err, categories) => {
        if(err){
            return res.status(400).json({
                error : "Not category found"
            })
        }

        res.json(categories)
    })
    
}

exports.updateCategory = (req, res) => {
    let category = req.category;
    category.name = req.body.name;
    
  
    category.save((err, updatedCategory) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to update category"
        });
      }
      res.json(updatedCategory);
    });
  };

// exports.updateCategory = (req, res) => {
//     Category.findByIdAndUpdate(
//         {_id : req.category._id},
//         {$set : req.body},
//         {new : true, useFindAndModify : false},
//         (err, cate) => {
//             if(err){
//                 return res.status(400).json({
//                     error : "Updation was not successfull"
//                 })
//             }
          
//             res.json(cate)
//         }

//     )
    
// }


exports.removeCategory = (req, res) => {
    const category = req.category;
    category.remove((err, category) => {
        if(err){
            return res.status(400).json({
                error : "Deletion failed"
            })
        }

        res.json({
            message : `Successfully deleted ${category} `
        })
    })
}