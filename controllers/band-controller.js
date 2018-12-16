const Band = require('../models/Band');

module.exports = {
  getIndex: function (req, res) {
    // TODO:
      Band
          .find({})
          .then(bands =>{
              res.render('index',{bands})
          })

  },
  getCreate: function (req, res) {
    // TODO:
      return res.render('create')
  },
  postCreate: function (req, res) {
    // TODO:
      console.log(req.body);
      Band.create(req.body)
          .then((createdBand) =>{
            console.log(createdBand);
              return res.redirect('/')
          })
  },
  getEdit: function (req, res) {
    // TODO:
      let id = req.params.id;
      Band
          .findById(id)
          .then(band =>{
            res.render('edit',{band})
          })

  },
  postEdit: function (req, res) {

      const id = req.params.id;
      const updated = req.body;
      Band
          .findByIdAndUpdate(id,updated)
          .then(()=>{
            return res.redirect('/')
          })
  },
  getDelete: function (req, res) {
    // TODO:
    let id = req.params.id;
    Band.findById(id)
        .then((band)=>{
            return res.render('delete', {band});
        })


  },
  postDelete: function (req, res) {
    // TODO:
      let id = req.params.id;
      console.log(id)
      Band
          .findByIdAndRemove(id)
          .then(()=>{
              return res.redirect('/')
                  .catch((err) => console.log(err));
          })
  }
};