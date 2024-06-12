import React, { useState } from 'react';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import OrgTree from './org';
import UserTable from './user';

export default () => {
  const [orgId, setOrgId] = useState<string>();

  return (
    <PageContainer>
      <ProCard split="vertical">
        <ProCard
          title="组织"
          bordered
          headerBordered
          colSpan={{
            xs: '50px',
            sm: '100px',
            md: '150px',
            lg: '200px',
            xl: '280px',
          }}
        >
          <OrgTree onSelect={(id: string[]) => {
            if (id.length === 0) return;
            setOrgId(id[0]);
          }} />
        </ProCard>
        <ProCard title="账户" bordered headerBordered>
          <UserTable orgId={orgId} />
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
