import SearchBar from './SearchBar'
import Tenants from './Tenants';
import AddTenant from './AddTenant';
import EditTenant from './EditTenant';

const TenantList = () => {
    return (
        <div className="tenantlist--container">
            <section>
                <h1>Multitenancy</h1>
                <p>Share services with multiple tenants</p>
                <br />
                <SearchBar />
                <br />
                <Tenants />
                <AddTenant />
                <EditTenant />

            </section>
        </div>

    );
  }
  
  export default TenantList;