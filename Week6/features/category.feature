Feature: Category Flow

    Background:
        Given I am on the dashboard page
    
    Scenario: As a User, I should successfully add a new category
        When I click on the Kategori menu
        And I click on the tambah button
        And I input nama as "<name>" and deskripsi as "<description>"
        And I click on the Simpan button
        Then I should see a success alert with a "<message>"

        Examples:
            |   name                |   description                 |   message             |
            |   Dendeng Lambok      |   Makanan khas dari Minang    |   item ditambahkan    |

    Scenario: As a user, I shouldn't be able to add a new category when the name is empty
        When I click on the Kategori menu
        And I click on the tambah button
        And I input nama as "<name>" and deskripsi as "<description>"
        And I click on the Simpan button
        Then I should see a error "<message>"

        Examples:
            |   name                |   description                 |   message                              |
            |                       |   Makanan khas dari Minang    |   \"name\" is not allowed to be empty   |

    Scenario: As a User, I should successfully edit my category
        When I click on the Kategori menu
        And I click on the kebab menu button
        And I click on the ubah menu
        And I input nama as "<name>" and deskripsi as "<description>"
        And I click on the Simpan button
        Then I should see a success alert with a "<message>"

        Examples:
            |   name                    |   description          |   message        |
            |   Lado Hijau              |                        |   item diubah    |
    
    Scenario: As a User, I should successfully delete my category
        When I click on the Kategori menu
        And I click on the kebab menu button
        And I click on the hapus menu
        And I click on the Delete button
        Then I should see a success alert with a "<message>"

        Examples:
            |   message         |
            |   item dihapus    |