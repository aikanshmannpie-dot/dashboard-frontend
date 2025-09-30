import { BaseModel } from '../../_base/crud';

export class SupplierModel extends BaseModel {
    supplier_id: number;
    supplier_name: string;
    bussiness_type: string;
    supplier_in: string;

    clear(): void {
        this.supplier_id = undefined;
        this.supplier_name = '';
        this.bussiness_type = '';
        this.supplier_in = '';
        this.clear();
    }
}
