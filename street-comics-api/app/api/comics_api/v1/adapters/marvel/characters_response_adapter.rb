module ComicsApi
  module V1
    module Adapters
      module Marvel
        class CharactersResponseAdapter

          attr_reader(:response)

          def self.create(response)
            new(response).create
          end

          def initialize(response)
            @response = response
          end

          def create
            ComicsApi::V1::Models::CharactersResponse.new(body: create_characters_data)
          end

          private

          def create_characters_data
            ComicsApi::V1::Models::CharactersData.new(data: create_characters_list)
          end

          def create_characters_list
            ComicsApi::V1::Models::CharactersList.new(items: create_characters_items)
          end

          def create_characters_items
            results.map do |item|
              ComicsApi::V1::Models::CharactersItem.new(
                id: item[:id],
                name: item[:name],
              )
            end
          end

          def results
            return [] if empty?

            response_body[:data][:results]
          end

          def empty?
            response_body.nil? || response_body[:data].nil? || response_body[:data][:results].nil?
          end

          def response_body
            return if @response.body.nil?

            @response.body.with_indifferent_access
          end
        end
      end
    end
  end
end