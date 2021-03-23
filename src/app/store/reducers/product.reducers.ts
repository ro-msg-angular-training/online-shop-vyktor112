import {initialProductState, ProductState} from "../state/product.state";
import {ProductActions, ProductActionsEnum} from "../actions/product.actions";

export const productReducers = (
  state = initialProductState,
  action: ProductActions
): ProductState =>{
  switch (action.type) {
    case ProductActionsEnum.GetAllProductsSuccess:{
      return {
        ...state,
        products:action.payload
      }
    }
    case ProductActionsEnum.GetProductSuccess:{
      return {
        ...state,
        selectedProduct: action.payload
      }
    }
    case ProductActionsEnum.DeleteProductSuccess:{
      return {
        ...state
      }
    }
    case ProductActionsEnum.AddProductSuccess: {
      return {
        ...state
      }
    }
    case ProductActionsEnum.UpdateProductSuccess: {
      return {
        ...state,
        selectedProduct: action.payload
      }
    }

    default:
      return state;
  }
}
