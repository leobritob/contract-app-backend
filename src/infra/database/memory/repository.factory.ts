import { ContractRepository } from '../../../domain/repository/contract.repository';
import { JobRepository } from '../../../domain/repository/job.repository';
import { ProfileRepository } from '../../../domain/repository/profile.repository';
import { RepositoryFactory } from '../../../domain/repository/repository.factory';
import { ContractRepositoryMemory } from '../../repository/memory/contract.repository';
import { JobRepositoryMemory } from '../../repository/memory/job.repository';
import { ProfileRepositoryMemory } from '../../repository/memory/profile.repository';
import { DatabaseConnection } from '../database';

export class MemoryRepositoryFactory implements RepositoryFactory {
  constructor(private readonly database: DatabaseConnection) {}

  createContractRepository(): ContractRepository {
    return new ContractRepositoryMemory(this.database);
  }

  createJobRepository(): JobRepository {
    return new JobRepositoryMemory(this.database);
  }

  createProfileRepository(): ProfileRepository {
    return new ProfileRepositoryMemory(this.database);
  }
}
