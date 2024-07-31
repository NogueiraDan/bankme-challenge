import { Assignor } from '../entities/assignor.entity';

export interface AssignorRepository {
  create(assignor: Assignor): Promise<Assignor>;
  findAll(): Promise<Assignor[]>;
  findById(id: string): Promise<Assignor | null>;
  update(id: string, assignor: Assignor): Promise<Assignor>;
  delete(id: string): Promise<void>;
}
