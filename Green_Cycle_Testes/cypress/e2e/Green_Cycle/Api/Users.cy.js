///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
const password = faker.internet.password(10, false, /[A-Za-z0-9]/);


describe('API - Testes de usuarios ', () => {
   
   /// Post /Register
    it.only('É possível adicionar usuário com dados válidos.', () => {

        cy.request({
            method: 'POST',
            url: 'https://green-cycle-ys6i.onrender.com',
            body: {
                "name": faker.person.fullName(), // Nome gerado aleatoriamente
                "email": faker.internet.email(), // E-mail gerado aleatoriamente
                "password": password, // Senha gerada aleatoriamente
                "confirmPassword": password, // Confirmar senha deve ser igual à senha gerada
                "cpf": faker.string.numeric(11), // CPF gerado aleatoriamente (11 dígitos)
                "telefone": faker.phone.number(11) // Telefone gerado aleatoriamente (11 dígitos)
            }
        }).then((response) => {
            expect(response.status).to.equal(201); // Verifica se a resposta foi bem-sucedida (201 Created)
            expect(response.body.message).to.equal('Usuário registrado com sucesso.'); // Mensagem esperada na resposta
        });
    });    
    it('Não é possível adicionar um usuário com nome inválido.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            
                "name": "Green Cycle da Silv@",
                "email": "greencycle@gmail.com",
                "password": "Green-cycl3",
                "confirmPassword": "Green-cycl3",
                "cpf": 12345678909,
            
                "telefone": 21978654321
              

           },
           failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Nome inválido.')
        })
    });
    it('Não é possível adicionar um usuário com CPF inválido.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            
                "name": "Green Cycle da Silva",
                "email": "greencycle@gmail.com",
                "password": "Green-cycl3",
                "confirmPassword": "Green-cycl3",
                "cpf": '123456789@',
            
                "telefone": 21978654321
              

           },
           failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('CPF inválido.')
        })
    });
    it('Não é possível adicionar um usuário com e-mail inválido.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            
                "name": "Green Cycle da Silv@",
                "email": "greencyclegmail.com",
                "password": "Green-cycl3",
                "confirmPassword": "Green-cycl3",
                "cpf": '123456789@',
            
                "telefone": 21978654321
              

           },
           failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('E-mail inválido.')
        })
    });
    it('Não é possível adicionar um usuário com telefone inválido.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            
                "name": "Green Cycle da Silv@",
                "email": "greencyclegmail.com",
                "password": "Green-cycl3",
                "confirmPassword": "Green-cycl3",
                "cpf": '123456789@',
            
                "telefone": 2197
              

           },
           failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Telefone inválido.')
        })
    });
    it('Não é possível adicionar um usuário com senha inválida.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            
                "name": "Green Cycle da Silv@",
                "email": "greencyclegmail.com",
                "password": "G3",
                "confirmPassword": "Green-cycl3",
                "cpf": '123456789@',
            
                "telefone": 21978654321
              

           },
           failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Senha inválida.')
        })
    });
    it('Não é possível adicionar um usuário com a confirmação de senha inválida.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            
                "name": "Green Cycle da Silv@",
                "email": "greencyclegmail.com",
                "password": "Green-cycl3",
                "confirmPassword": "G3",
                "cpf": '123456789@',
            
                "telefone": 21978654321
              

           },
           failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Confirmação de senha não corresponde.')
        })
    });
    
    it('Não é possível adicionar um usuário existente.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            "name": "Green Cycle da Silva",
            "email": "greencycle@gmail.com",
            "password": "Green-cycl3",
            "confirmPassword": "Green-cycl3",
            "cpf": 12345678909,
        
            "telefone": 21978654321
              

           },
           failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Usuário já registrado.')
        })
    });
    it('Não é possível validar a solicitação com o parâmetro confirmPassword diferente do parâmetro password.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            "name": "Green Cycle Vieira Sors",
            "email": "greencyclev9@gmail.com",
            "password": "Green-cycl3",
            "confirmPassword": "Green-cycl2",
            "cpf": 96300258741,
        
            "telefone": 22998517641
        
              

           },
           failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Senhas não coincidem.')
        })
    });
    /// PARÂMETRO NAME
    it('É possível validar o parâmetro name com string letras latinas.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            "name": (faker.person.fullName(15)), /// Adicionar FAker Js
            "email": "greencyclev9@gmail.com",
            "password": "Green-cycl3",
            "confirmPassword": "Green-cycl2",
            "cpf": 96300258741,
        
            "telefone": 22998517641
        
              

           },
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Nome válido.')
        })
    });
    it('Não é possível validar o parâmetro name com string de mais de 40 caracteres. ', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            "name":  "Green Cycle da Silva de MoraesSouza Guilhermino VierinhaVambora",
            "email": "greencyclev9@gmail.com",
            "password": "Green-cycl3",
            "confirmPassword": "Green-cycl2",
            "cpf": 96300258741,
        
            "telefone": 22998517641
        
              

           },
           failOnStatusCode: false

        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Nome muito longo.')
        })
    });
    it('Não é possível validar o parâmetro name vazio.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            "name":  "",
            "email": "greencyclev9@gmail.com",
            "password": "Green-cycl3",
            "confirmPassword": "Green-cycl2",
            "cpf": 96300258741,
        
            "telefone": 22998517641
        
              

           },
           failOnStatusCode: false

        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Nome é obrigatório.')
        })
    });
    it('Não é possível validar o parâmetro name com number.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            "name":  "1267345712",
            "email": "greencyclev9@gmail.com",
            "password": "Green-cycl3",
            "confirmPassword": "Green-cycl2",
            "cpf": 96300258741,
        
            "telefone": 22998517641
        
              

           },
           failOnStatusCode: false

        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Nome não deve conter números.')
        })
    });
    it('É possível validar o parâmetro name com caractere traço.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            "name":  "Green-Cycle-Souza",
            "email": "greencyclev9@gmail.com",
            "password": "Green-cycl3",
            "confirmPassword": "Green-cycl2",
            "cpf": 96300258741,
        
            "telefone": 22998517641
        
              

           },

        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Nome válido.')
        })
    });
    it('Não é possível validar o parâmetro name com outros caracteres especiais.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            "name":  "Green Cycle Souza!!!!",
            "email": "greencyclev9@gmail.com",
            "password": "Green-cycl3",
            "confirmPassword": "Green-cycl2",
            "cpf": 96300258741,
        
            "telefone": 22998517641
        
              

           },

        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Nome contém caracteres inválidos.')
        })
    });
    it('Não é possível validar a solicitação sem o parâmetro name.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            "email": "greencyclev9@gmail.com",
            "password": "Green-cycl3",
            "confirmPassword": "Green-cycl2",
            "cpf": 96300258741,
        
            "telefone": 22998517641
           },

           failOnStatusCode: false

        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Parâmetro name é obrigatório.')
        })
    });
    it('É possível validar o parâmetro name sem espaços.', () => {
        cy.request({
           method : 'POST',
           url : 'https://green-cycle.netlify.app',
           body : {
            "name": "GreenCycledaSilva",
            "email": "greencycl3e@gmail.com",
            "password": "Green-cycl3",
            "confirmPassword": "Green-cycl3",
            "cpf": 12345378909,
        
            "telefone": 21978654321
           },


        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Nome válido.')
        })
    });
  /// PARÂMETRO CPF
  it('É possível validar o parâmetro cpf com 11 caracteres.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "email": "greencyclesouzinha@gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,/// adicionar FakerJs
    
        "telefone": 22998877541
       },


    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('CPF válido.')
    })
});
it('Não é possível validar o parâmetro cpf com 9 caracteres.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "email": "greencyclev9@gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl2",
        "cpf": 245879211,
    
        "telefone": 22998517641
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('CPF deve conter 11 dígitos.')
    })
});
it('Não é possível validar o parâmetro cpf com string letras latinas.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "email": "greencyclev9@gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl2",
        "cpf": 'greenvieira',
    
        "telefone": 22998517641
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('CPF não deve conter letras.')
    })
});
it('Não é possível validar o parâmetro cpf com string caracteres especiais.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "email": "greencyclev9@gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl2",
        "cpf": '!@#!@#!@',
    
        "telefone": 22998517641
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('CPF contém caracteres inválidos.')
    })
});
it('Não é possível validar a solicitação com o parâmetro cpf vazio.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "email": "greencyclev9@gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl2",
        "cpf": '',
    
        "telefone": 22998517641
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('CPF é obrigatório.')
    })
});
it('Não é possível validar a solicitação com o parâmetro cpf apagado do body.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "email": "greencyclev9@gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl2",
    
        "telefone": 22998517641
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Parâmetro CPF é obrigatório.')
    })
});
it('Não é possível validar a solicitação com o parâmetro cpf como objeto', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "email": "greencyclev9@gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl2",
        "cpf": {},

    
        "telefone": 22998517641
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('CPF deve ser uma string.')
    })
});
///PARÂMETRO EMAIL
it('É possível validar o parâmetro email com caractere especial @.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "email": "greencyclesouzinha@gmail.com",///Adicionar Faker Js
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": 22998877541
       },


    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('E-mail válido.')
    })
})

it('É possível validar parâmetro email com ponto.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "email": "green.cyclev9@gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": 22998877541
       },


    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('E-mail válido.')
    })
})
it('Não é possível validar o parâmetro email sem o caractere especial @.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "email": "green.cyclev9gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": 22998877541
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('E-mail inválido, falta o caractere @.')
    })
})
it('Não é possível validar a solicitação com o parâmetro email vazio.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "email": "",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": 22998877541
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('E-mail é obrigatório.')
    })
})
it('Não é possível validar o parâmetro email com mais de 50 caracteres.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "email": "greengreengreengreencyclecyclecyclejuninhodasilvavieirasouza@gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": 22998877541
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('E-mail muito longo.')
    })
})
it('Não é possível validar o parâmetro email com menos de 5 caracteres.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "email": "gren@gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": 22998877541
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('E-mail muito curto.')
    })
})
it('É possível validar o parâmetro email com caractere especial hífen.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "email": "gr-een-cy-cle@gmail.com",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": 22998877541
       },


    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('E-mail válido.')
    })
})
it('Não é possível validar o parâmetro email com number.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "email": "129736112",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": 22998877541
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('E-mail não deve conter apenas números.')
    })
})
it('Não é possível validar a solicitação sem o parâmetro email.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": 22998877541
       },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Parâmetro email é obrigatório.')
    })
})
///PARÂMETRO TELEFONE
it('É possível validar o parâmetro telefone com number.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": 22998877541 /// Adicionar Faker Js
       },


    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Telefone válido.')
    })
})
it('Não é possível validar o parâmetro telefone com string letras latinas.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": "alougreen"
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Telefone não deve conter letras.')
    })
})
it('Não é possível validar o parâmetro telefone com menos de 11 caracteres.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": "23112"
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Telefone deve conter 11 dígitos.')
    })
})
it('Não é possível validar o parâmetro telefone com mais de 11 caracteres', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": "552199888775541"
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Telefone deve conter 11 dígitos.')
    })
})
it('Não é possível validar o parâmetro telefone vazio.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
        "telefone": ""
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Telefone é obrigatório.')
    })
})
it('Não é possível validar a solicitação sem o parâmetro telefone.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Souzinha",
        "password": "Green-cycl3",
        "confirmPassword": "Green-cycl3",
        "cpf": 24587921300,
    
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Parâmetro telefone é obrigatório.')
    })
})
///PARÂMETROS PASSWORD E CONFIRMPASSWORD
it('É possível validar os parâmetros de senha e confirmação de senha com 10 caracteres.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Rodriiggues",
        "email": "greeny-cle@gmail.com",
        "password": "Gree-cycl3",
        "confirmPassword": "Gree-cycl3",
        "cpf": 85275641300,

         "telefone": 24558877997
    },


    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Senha válida.')
    })
})
it('Não é possível validar os parâmetros de senha e confirmação de senha com menos de 10 caracteres.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Rodriiggues",
        "email": "greeny-cle@gmail.com",
        "password": "G-c3",
        "confirmPassword": "G-c3",
        "cpf": 85275641300,

         "telefone": 24558877997
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Senha muito curta.')
    })
})
it('Não é possível validar os parâmetros de senha e confirmação de senha com mais de 15 caracteres.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Rodriiggues",
        "email": "greeny-cle@gmail.com",
        "password": "Issoaquitem-maisde15",
        "confirmPassword": "Issoaquitem-maisde15",
        "cpf": 85275641300,

         "telefone": 24558877997
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Senha muito longa.')
    })
})
it('Não é possível validar os parâmetros de senha e confirmação de senha somente com string letra latina maiúscula.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Rodriiggues",
        "email": "greeny-cle@gmail.com",
        "password": "SOMAIUSCULO",
        "confirmPassword": "SOMAIUSCULO",
        "cpf": 85275641300,

         "telefone": 24558877997
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Senha deve conter uma combinação de letras maiúsculas e minúsculas, números e caracteres especiais.')
    })
})
it('Não é possível validar os parâmetros de senha e confirmação de senha somente com string letra latina minúscula.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Rodriiggues",
        "email": "greeny-cle@gmail.com",
        "password": "sominusculo",
    "confirmPassword": "sominusculo",
        "cpf": 85275641300,

         "telefone": 24558877997
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Senha deve conter uma combinação de letras maiúsculas e minúsculas, números e caracteres especiais.')
    })
})
it('Não é possível validar os parâmetros de senha e confirmação de senha somente com string caracteres especiais', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Rodriiggues",
        "email": "greeny-cle@gmail.com",
        "password": "---@@@///--",
        "confirmPassword": "---@@@///--",
        "cpf": 85275641300,

         "telefone": 24558877997
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Senha deve conter uma combinação de letras maiúsculas e minúsculas, números e caracteres especiais.')
    })
})
it('Não é possível validar os parâmetros de senha e confirmação de senha somente com números', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Rodriiggues",
        "email": "greeny-cle@gmail.com",
        "password": "1234567890",
    "confirmPassword": "1234567890",
        "cpf": 85275641300,

         "telefone": 24558877997
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Senha deve conter uma combinação de letras maiúsculas e minúsculas, números e caracteres especiais.')
    })
})
it('Não é possível validar o parâmetro password vazio.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Rodriiggues",
        "email": "greeny-cle@gmail.com",
        "password": "",
    "confirmPassword": "1234567890",
        "cpf": 85275641300,

         "telefone": 24558877997
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Senha é obrigatória.')
    })
})
it('Não é possível validar a solicitação sem o parâmetro password.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Cycle Rodriiggues",
        "email": "greeny-cle@gmail.com",
    "confirmPassword": "1234567890",
        "cpf": 85275641300,

         "telefone": 24558877997
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Senha é obrigatória.')
    })
})
it('Não é possível validar o parâmetro confirmPassword vazio.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
  "name": "Green Junqueiro",
    "email": "greny-cl9e6@gmail.com",
    "password": "Green-cycl3",
    "confirmPassword": null,
    "cpf": 85275621200,

    "telefone": 24558877997
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Senha é obrigatória.')
    })
})
it('Não é possível validar a solicitação sem o parâmetro confirmPassword.', () => {
    cy.request({
       method : 'POST',
       url : 'https://green-cycle.netlify.app',
       body : {
        "name": "Green Junqueiro",
        "email": "greny-cl9e6@gmail.com",
        "password": "Green-cycl3",
        "cpf": 85275621200,
    
        "telefone": 24558877997
    
    },

       failOnStatusCode: false

    }).then((response)=>{
        expect(response.status).to.equal(400)
        expect(response.body.message).to.equal('Senha é obrigatória.')
    })
})

 });
