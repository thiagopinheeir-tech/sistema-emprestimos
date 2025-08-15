// Módulo Clientes
// ===============

const ClientesModule = {
    editingClienteId: null,

    // Renderizar HTML da página de clientes
    render(container) {
        container.innerHTML = `
            <div class="page cadastro-page active" id="cadastro">
                <div class="page-header">
                    <h2>Cadastro de Clientes</h2>
                    <button class="btn btn--primary" id="toggleFormBtn">Novo Cliente</button>
                </div>

                <!-- Formulário Novo Cliente -->
                <div class="form-container hidden" id="clienteForm">
                    <form class="form" id="cadastroForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Nome *</label>
                                <input type="text" class="form-control" id="clienteNome" required>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Contato</label>
                                <input type="text" class="form-control" id="clienteContato" placeholder="(11) 99999-9999">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Endereço</label>
                                <input type="text" class="form-control" id="clienteEndereco">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Documento (CPF)</label>
                                <input type="text" class="form-control" id="clienteDocumento" placeholder="000.000.000-00">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Data Nascimento</label>
                                <input type="date" class="form-control" id="clienteDataNascimento">
                            </div>
                            <div class="form-group">
                                <label class="form-label">Foto do Cliente</label>
                                <input type="file" class="form-control" id="clienteFotoFile" accept="image/*">
                                <input type="hidden" id="clienteFotoData">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Preview da Foto</label>
                            <div class="photo-preview" id="photoPreviewAdd">
                                <img id="previewImageAdd" style="display:none;width:80px;height:80px;border-radius:50%;object-fit:cover;border:2px solid var(--color-primary);" alt="Preview">
                                <span id="noPhotoTextAdd" style="color:var(--color-text-muted);">Nenhuma foto selecionada</span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Observações</label>
                            <textarea class="form-control" id="clienteObservacoes" rows="3" placeholder="Informações adicionais sobre o cliente"></textarea>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label class="form-label">Status</label>
                                <select class="form-control" id="clienteStatus">
                                    <option value="ativo">Ativo</option>
                                    <option value="inativo">Inativo</option>
                                </select>
                            </div>
                            <div class="form-group admin-only manager-only hidden">
                                <label class="form-label">Responsável</label>
                                <select class="form-control" id="clienteResponsavel">
                                    <option value="">Selecione um responsável</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-actions">
                            <button type="submit" class="btn btn--primary">Cadastrar Cliente</button>
                            <button type="button" class="btn btn--secondary" id="cancelFormBtn">Cancelar</button>
                        </div>
                    </form>
                </div>

                <!-- Modal Editar Cliente -->
                <div class="modal hidden" id="clienteEditModal">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3>Editar Cliente</h3>
                            <button class="btn-close" id="closeClienteEditModal">×</button>
                        </div>
                        <form class="modal-body" id="clienteEditForm">
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">Nome *</label>
                                    <input type="text" class="form-control" id="editClienteNome" required>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Contato</label>
                                    <input type="text" class="form-control" id="editClienteContato" placeholder="(11) 99999-9999">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">Endereço</label>
                                    <input type="text" class="form-control" id="editClienteEndereco">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Documento (CPF)</label>
                                    <input type="text" class="form-control" id="editClienteDocumento" placeholder="000.000.000-00">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">Data Nascimento</label>
                                    <input type="date" class="form-control" id="editClienteDataNascimento">
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Foto do Cliente</label>
                                    <input type="file" class="form-control" id="editClienteFotoFile" accept="image/*">
                                    <input type="hidden" id="editClienteFotoData">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Preview da Foto</label>
                                <div class="photo-preview" id="photoPreview">
                                    <img id="previewImage" class="client-photo-preview" style="display: none; width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid var(--color-primary);" alt="Preview">
                                    <span id="noPhotoText" style="color: var(--color-text-muted);">Nenhuma foto selecionada</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Observações</label>
                                <textarea class="form-control" id="editClienteObservacoes" rows="3"></textarea>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label">Status</label>
                                    <select class="form-control" id="editClienteStatus">
                                        <option value="ativo">Ativo</option>
                                        <option value="inativo">Inativo</option>
                                    </select>
                                </div>
                                <div class="form-group admin-only manager-only hidden">
                                    <label class="form-label">Responsável</label>
                                    <select class="form-control" id="editClienteResponsavel">
                                        <option value="">Selecione um responsável</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div class="modal-footer">
                            <button type="submit" form="clienteEditForm" class="btn btn--primary">Salvar Alterações</button>
                            <button type="button" class="btn btn--secondary" id="cancelClienteEditBtn">Cancelar</button>
                        </div>
                    </div>
                </div>

                <!-- Tabela de Clientes -->
                <div class="table-container">
                    <table class="table" id="clientesTable">
                        <thead>
                            <tr>
                                <th>Foto</th>
                                <th>Nome</th>
                                <th>Contato</th>
                                <th class="admin-only manager-only hidden">Responsável</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody id="clientesTableBody">
                            <tr><td colspan="6">Carregando clientes...</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        this.bindEvents();
    },

    // Carregar dados
    loadData() {
        this.loadClientes();
        this.populateResponsavelSelect();
    },

    // Carregar lista de clientes
    loadClientes() {
        const clientesPermitidos = sistema.getFilteredClientes();
        const tbody = document.getElementById('clientesTableBody');

        if (clientesPermitidos.length === 0) {
            const colspan = sistema.currentUser.role === 'operator' ? '5' : '6';
            tbody.innerHTML = `<tr><td colspan="${colspan}">Nenhum cliente encontrado</td></tr>`;
            return;
        }

        tbody.innerHTML = clientesPermitidos.map(cliente => {
            const responsavel = sistema.users.find(u => u.id === cliente.responsavelId);
            const canEdit = sistema.canEditClient(cliente.id);

            return `
                <tr>
                    <td>
                        ${cliente.foto ? `<img src="${cliente.foto}" class="client-photo" alt="${cliente.nome}">` : '-'}
                    </td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.contato || '-'}</td>
                    ${sistema.currentUser.role !== 'operator' ? `<td>${responsavel ? responsavel.name : '-'}</td>` : ''}
                    <td><span class="status-badge status-${cliente.status}">${cliente.status}</span></td>
                    <td>
                        ${canEdit ? `
                            <button class="btn btn--sm btn--info" onclick="ClientesModule.editarCliente('${cliente.id}')">
                                Editar
                            </button>
                            <button class="btn btn--sm btn--danger" onclick="ClientesModule.removerCliente('${cliente.id}')">
                                Remover
                            </button>
                        ` : '-'}
                    </td>
                </tr>
            `;
        }).join('');
    },

    // Popular select de responsável
    populateResponsavelSelect() {
        const select = document.getElementById('clienteResponsavel');
        const editSelect = document.getElementById('editClienteResponsavel');
        if (!select) return;

        let options = '';
        
        if (sistema.currentUser.role === 'admin') {
            const allUsers = sistema.users.filter(u => u.status === 'ativo' && u.role !== 'admin');
            options = '<option value="">Selecione um responsável</option>' +
                allUsers.map(user => `
                    <option value="${user.id}">${user.name} (${user.role === 'manager' ? 'Gerente' : 'Operador'})</option>
                `).join('');
        } else if (sistema.currentUser.role === 'manager') {
            const operadores = sistema.users.filter(u => u.role === 'operator' && u.gerenteId === sistema.currentUser.id && u.status === 'ativo');
            options = '<option value="">Selecione um responsável</option>' +
                `<option value="${sistema.currentUser.id}">${sistema.currentUser.name} (Eu)</option>` +
                operadores.map(op => `
                    <option value="${op.id}">${op.name} (Operador)</option>
                `).join('');
        } else {
            options = `<option value="${sistema.currentUser.id}" selected>${sistema.currentUser.name} (Eu)</option>`;
            select.disabled = true;
            if (editSelect) editSelect.disabled = true;
        }

        select.innerHTML = options;
        if (editSelect) editSelect.innerHTML = options;
    },

    // Adicionar cliente
    addCliente(clienteData) {
        const newCliente = {
            id: Utils.generateId('cliente_'),
            ...clienteData,
            responsavelId: clienteData.responsavelId || sistema.currentUser.id
        };

        sistema.clientes.push(newCliente);
        this.loadClientes();
        Utils.alert('Cliente cadastrado com sucesso!');
        return newCliente;
    },

    // Editar cliente
    editarCliente(clienteId) {
        if (!sistema.canEditClient(clienteId)) {
            Utils.alert('Você não tem permissão para editar este cliente.');
            return;
        }

        const cliente = sistema.clientes.find(c => c.id === clienteId);
        if (!cliente) {
            Utils.alert('Cliente não encontrado.');
            return;
        }

        this.editingClienteId = clienteId;

        // Preencher formulário
        document.getElementById('editClienteNome').value = cliente.nome;
        document.getElementById('editClienteContato').value = cliente.contato || '';
        document.getElementById('editClienteEndereco').value = cliente.endereco || '';
        document.getElementById('editClienteDocumento').value = cliente.documento || '';
        document.getElementById('editClienteDataNascimento').value = Utils.formatDateForInput(cliente.dataNascimento) || '';
        document.getElementById('editClienteFotoData').value = cliente.foto || '';
        document.getElementById('editClienteObservacoes').value = cliente.observacoes || '';
        document.getElementById('editClienteStatus').value = cliente.status;

        const responsavelSelect = document.getElementById('editClienteResponsavel');
        if (responsavelSelect) {
            responsavelSelect.value = cliente.responsavelId || '';
        }

        // Preview da foto
        Utils.previewPhoto(cliente.foto || '', 'previewImage', 'noPhotoText');

        // Mostrar modal
        Utils.toggleModal('clienteEditModal', true);
    },

    // Salvar edição de cliente
    salvarEdicaoCliente(clienteData) {
        if (!this.editingClienteId) return;

        const cliente = sistema.clientes.find(c => c.id === this.editingClienteId);
        if (!cliente) return;

        // Atualizar dados
        Object.assign(cliente, {
            ...clienteData,
            responsavelId: clienteData.responsavelId || cliente.responsavelId
        });

        this.loadClientes();
        Utils.alert('Cliente atualizado com sucesso!');
        return cliente;
    },

    // Remover cliente
    removerCliente(id) {
        if (!sistema.canEditClient(id)) {
            Utils.alert('Você não tem permissão para remover este cliente.');
            return;
        }

        Utils.confirm('Tem certeza que deseja remover este cliente?', () => {
            sistema.clientes = sistema.clientes.filter(c => c.id !== id);
            this.loadClientes();
            Utils.alert('Cliente removido com sucesso!');
        });
    },

    // Bind eventos
    bindEvents() {
        // Toggle formulário
        document.getElementById('toggleFormBtn')?.addEventListener('click', () => {
            const form = document.getElementById('clienteForm');
            form.classList.toggle('hidden');
        });

        // Cancelar formulário
        document.getElementById('cancelFormBtn')?.addEventListener('click', () => {
            document.getElementById('clienteForm').classList.add('hidden');
            Utils.clearForm('cadastroForm');
            Utils.previewPhoto('', 'previewImageAdd', 'noPhotoTextAdd');
        });

        // Submit novo cliente
        document.getElementById('cadastroForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const clienteData = {
                nome: document.getElementById('clienteNome').value,
                contato: document.getElementById('clienteContato').value,
                endereco: document.getElementById('clienteEndereco').value,
                documento: document.getElementById('clienteDocumento').value,
                dataNascimento: document.getElementById('clienteDataNascimento').value,
                foto: document.getElementById('clienteFotoData').value,
                observacoes: document.getElementById('clienteObservacoes').value,
                status: document.getElementById('clienteStatus').value,
                responsavelId: document.getElementById('clienteResponsavel')?.value || sistema.currentUser.id
            };

            this.addCliente(clienteData);
            
            // Limpar formulário
            document.getElementById('clienteForm').classList.add('hidden');
            Utils.clearForm('cadastroForm');
            document.getElementById('clienteFotoData').value = '';
            Utils.previewPhoto('', 'previewImageAdd', 'noPhotoTextAdd');
        });

        // Upload foto novo cliente
        document.getElementById('clienteFotoFile')?.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                Utils.convertToBase64(file, (base64) => {
                    document.getElementById('clienteFotoData').value = base64;
                    Utils.previewPhoto(base64, 'previewImageAdd', 'noPhotoTextAdd');
                });
            }
        });

        // Modal edição - fechar
        document.getElementById('closeClienteEditModal')?.addEventListener('click', () => {
            Utils.toggleModal('clienteEditModal', false);
            this.editingClienteId = null;
        });

        // Modal edição - cancelar
        document.getElementById('cancelClienteEditBtn')?.addEventListener('click', () => {
            Utils.toggleModal('clienteEditModal', false);
            this.editingClienteId = null;
        });

        // Upload foto editar cliente
        document.getElementById('editClienteFotoFile')?.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                Utils.convertToBase64(file, (base64) => {
                    document.getElementById('editClienteFotoData').value = base64;
                    Utils.previewPhoto(base64, 'previewImage', 'noPhotoText');
                });
            }
        });

        // Submit editar cliente
        document.getElementById('clienteEditForm')?.addEventListener('submit', (e) => {
            e.preventDefault();

            const clienteData = {
                nome: document.getElementById('editClienteNome').value,
                contato: document.getElementById('editClienteContato').value,
                endereco: document.getElementById('editClienteEndereco').value,
                documento: document.getElementById('editClienteDocumento').value,
                dataNascimento: document.getElementById('editClienteDataNascimento').value,
                foto: document.getElementById('editClienteFotoData').value,
                observacoes: document.getElementById('editClienteObservacoes').value,
                status: document.getElementById('editClienteStatus').value,
                responsavelId: document.getElementById('editClienteResponsavel')?.value
            };

            this.salvarEdicaoCliente(clienteData);
            Utils.toggleModal('clienteEditModal', false);
            this.editingClienteId = null;
        });
    }
};