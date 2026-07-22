import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { RoleSelector } from './RoleSelector';
import AdvisorApp from './advisor/AdvisorApp';
import BuyerApp from './buyer/BuyerApp';

type Role = 'selector' | 'buyer' | 'advisor';

export default function App() {
  const [role, setRole] = useState<Role>('selector');

  if (role === 'selector') {
    return <RoleSelector onSelectRole={setRole} />;
  }

  return (
    <div className="min-h-screen w-full">
      {/* Slim switcher bar: lets reviewers jump back to the role picker without a full reload */}
      <div className="bg-slate-900 text-white text-xs px-4 sm:px-8 py-1.5 flex items-center justify-between gap-3">
        <span className="text-slate-300">
          Vista actual: <span className="font-bold text-[#FFD200]">{role === 'buyer' ? 'Comprador' : 'Asesor Comercial'}</span>
        </span>
        <button
          onClick={() => setRole('selector')}
          className="flex items-center gap-1.5 font-semibold text-slate-200 hover:text-[#FFD200] transition-colors"
        >
          <ArrowLeftRight size={12} />
          Cambiar de vista
        </button>
      </div>

      {role === 'buyer' ? <BuyerApp /> : <AdvisorApp />}
    </div>
  );
}
