# wt-rd-core

**拆分微服务后通用的业务功能模块和共享定义文件，目前包含 identifier, tree, pilot, customization, agile 相关模块**

## identifier

模拟数据库递增序列号

```
import { identifierService, constants } from "@worktile/wt-rd-core/identifier";
identifierService
const id1 = await identifier.identifierService.next(operationDescription, constants.IdentifierScope.pipeline);
```

## customization

## pilot

## tree

## agile

## attachment

```

export class WorkItemEntity extends BusinessEntity {
    title: string
    attachments: AttachmentEntity[],
    attachment_count: number
}

@injectable()
export class WorkItemAttachmentService extends PrincipalAttachmentService<WorkItemEntity, WorkItemRepository> {
    constructor() {
        super(ContainerPool.getDefaultContainer().resolve<WorkItemRepository>(WorkItemRepository));
    }

    public async onAddAttachments(operationContext: OperationContext, attachments: AttachmentEntity[], principalId: Id): Promise<void> {}

    public async onRemoveAttachment(operationContext: OperationContext, attachment: AttachmentEntity, principalId: Id): Promise<void> {}
}

@facade()
@route(`/work-items`)
export class WorkItemAttachmentFacade extends AttachmentFacade<WorkItemEntity, WorkItemRepository, WorkItemAttachmentService> {
    constructor() {
        super(ContainerPool.getDefaultContainer().resolve(WorkItemAttachmentService));
    }
}

```
