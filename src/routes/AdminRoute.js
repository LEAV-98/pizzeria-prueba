import { Switch, Route, useRouteMatch } from "react-router-dom";
import { AddProduct } from "../screens/admin/AddProduct";
import { PrincipalAdmin } from "../screens/admin/PrincipalAdmin";
import { ProductsAdmin } from "../screens/admin/ProductsAdmin";
import { NotFoundScreen } from "../screens/NotFoundScreen";
export const AdminRoute = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={`${path}/products`} component={ProductsAdmin} />
        <Route exact path={`${path}/add`} component={AddProduct} />
        <Route exact path={`${path}`} component={PrincipalAdmin} />
        <Route path="*" component={NotFoundScreen} />
      </Switch>
    </div>
  );
};
