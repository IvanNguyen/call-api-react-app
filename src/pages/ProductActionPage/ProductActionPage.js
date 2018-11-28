import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import {  actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions';
import {connect} from 'react-redux'


class ProductActionPage extends Component {
    
    constructor(props){
        super(props);
        this.state = { // tao State luu tru thong tin form de xu ly
            id:'',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        }
    }
    componentDidMount(){
        var {match}=this.props;
        if(match){
            this.props.onEditProduct(match.params.id);
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var {itemEditing} =nextProps;
            this.setState({
                id: itemEditing.id,
                txtName: itemEditing.name,
                txtPrice: itemEditing.price,
                chkbStatus: itemEditing.status
            })
        }
    }
    onChange = (e) => {
       var target = e.target;
       var name = target.name;
       var value = target.type === 'checkbox' ? target.checked : target.value;
       this.setState({
           [name]:value
       })
    }
    onSubmit = (e) => {
        var {txtName,txtPrice,chkbStatus,id} =this.state;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }
        e.preventDefault();
        if(id){
            
              this.props.onUpdateProduct(product)
              this.props.history.goBack();
            
        }else{
            this.props.onAddProduct(product)
            this.props.history.goBack();
        }
    }
    render(){
        
        return(
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              
              <form onSubmit={this.onSubmit}>
                 
              
                  <div className="form-group">
                      <label >Ten san pham</label>
                      <input type="text" className="form-control" name="txtName"
                                value={this.state.txtName}
                                onChange={this.onChange}
                                />
                  </div>
                  <div className="form-group">
                      <label >Gia</label>
                      <input type="number" className="form-control" name="txtPrice"
                                value={this.state.txtPrice}
                                onChange={this.onChange}
                                />
                  </div>
                  <div className="form-group">
                      <label >Trang thai</label>
                      
                      <div className="checkbox">
                          <label>
                              <input type="checkbox"
                                     name='chkbStatus'
                                    //  value={this.state.chkbStatus}
                                     onChange={this.onChange}
                                     checked={this.state.chkbStatus}
                              />
                              Con Hang
                          </label>
                      </div>
                      
                  </div>
              
                  
              
                  <button type="submit" className="btn btn-primary mr-10">Luu lai</button>
                  <Link
                        to="/product-list" className="btn btn-danger"
                  >Tro ve</Link>
              </form>
              
             
          </div>    
        )
    }
  
}
const mapStateToProps = state =>{
    return{
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        onAddProduct : (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct : (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductActionPage);