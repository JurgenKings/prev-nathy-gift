"use client"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import OfficeLayout from "@/components/OfficeLayout"
import Table from "@/components/Table"
import DeleteModal from "@/components/DeleteModal"
import SearchBarWithoutFilter from "@/components/SearchBarWithoutFilter"
import useCategories from "@/hooks/useCategories"
import useAuthStore from "@/hooks/useAuthStore"
import useLoading from "@/hooks/useLoading"
import { ICategory } from "@/interfaces/ICategory"
import notify from "@/utils/notify"
import Loading from "@/components/Loading"
import LoadingText from "@/components/LoadingText"
import AddItemModal from "@/components/AddItemModal"
import { deleteCategory } from "@/services/categories/category"
import CategoryForm from "./CategoryForm"

const columns = [
  {
    name: "image",
    label: "Imagen",
    isResponsiveTitle: false
  },
  {
    name: "name",
    label: "Nombre",
    isResponsiveTitle: true
  },
  {
    name: "description",
    label: "Descripción",
    isResponsiveTitle: false
  },
]

function OfficeCategoriesPage(): React.JSX.Element {

  // Logica de negocio eliminada

  return (
    <OfficeLayout>
      <div className="h-auto w-full bg-bg-primary p-4">
        <div className="max-w-[1440px] mx-auto">
          <div className="w-full max-w-[1440px] mx-auto px-4 py-6 rounded-lg lg:rounded-b-none">
            <div className="flex flex-col space-y-4 md:space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6"
              >
                Lista de mis categorías
              </motion.h1>

              <SearchBarWithoutFilter
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleAddItemModalOpen={handleAddCategoryModalOpen}
              />
            </div>
          </div>

          {isLoadingPage ? (
            <>
              <div className="fixed inset-0 bg-black opacity-50 z-[60]" />
              <div className="fixed inset-0 flex justify-center items-center z-[70]">
                <div className="flex flex-col items-center gap-4">
                  <Loading />
                  <LoadingText />
                </div>
              </div>
              <div className="h-screen" />
            </>
          ) : (
            <>
              <Table
                data={currentCategories}
                columns={columns}
                handleView={handleView}
                handleEdit={handleEdit}
                handleDeleteOpenModal={handleDeleteOpenModal}
                handleSelectedImage={handleSelectedImage}
                selectedImageData={selectedImageData}
                setSelectedImageData={setSelectedImageData}
                shouldShowViewButton={false}
              />
            </>
          )}
        </div>

        <DeleteModal
          isOpenDeleteModal={isOpenDeleteModal}
          handleDelete={handleDelete}
          handleDeleteCloseModal={handleDeleteCloseModal}
          itemToDelete={itemToDelete}
        />

        <AddItemModal
          isItemModalOpen={isCategoryModalOpen}
          handleAddItemModalClose={handleAddCategoryModalClose}
        >
          <CategoryForm
            handleAddCategoryModalClose={handleAddCategoryModalClose}
            categoryToEdit={categoryToEdit}
          />
        </AddItemModal>

      </div >
    </OfficeLayout>
  )
}

export default OfficeCategoriesPage