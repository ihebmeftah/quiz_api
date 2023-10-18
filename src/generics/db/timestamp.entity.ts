import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

export class TimeStampEntity extends BaseEntity {
  @CreateDateColumn({
    type: Date,
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: Date,
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: Date,
    name: 'deleted_at',
  })
  deletedAt: Date;

  @VersionColumn()
  version: number;
}
